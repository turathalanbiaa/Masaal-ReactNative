import React, {Component} from 'react';

import {Platform} from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import Http from "./utils/networking/Http";
import Link from "./constant/Link";
import DeviceInfo from 'react-native-device-info';
import Setting from "./constant/Setting";

FCM.on(FCMEvent.Notification, async (notif) =>
{
    // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
    if (notif.local_notification)
    {
        //this is a local notification
    }

    if (notif.opened_from_tray)
    {
        //iOS: app is open/resumed because user clicked banner
        //Android: app is open/resumed because user clicked banner or tapped app icon
    }


    // await someAsyncCall();

    if (Platform.OS === 'ios')
    {
        //optional
        //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
        //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
        //notif._notificationType is available for iOS platfrom
        switch (notif._notificationType)
        {
            case NotificationType.Remote:
                notif.finish(RemoteNotificationResult.NewData);
                break;
            case NotificationType.NotificationResponse:
                notif.finish();
                break;
            case NotificationType.WillPresent:
                notif.finish(WillPresentNotificationResult.All);
                break;
        }
    }
});

FCM.on(FCMEvent.RefreshToken, (token) =>
{
    console.log("refresh token ", token);
    sendFirebaseToken(token);
});

function sendFirebaseToken(token)
{
    let url = Link.settings.firebaseToken;
    let uuid = DeviceInfo.getUniqueID();
    Http.post(url , {deviceUUID : uuid , token : token}).then(() =>
    {
        Setting.setFirebaseTokenSent('1');
    }).catch(() =>
    {
        Setting.setFirebaseTokenSent('0');
    });
}

export default class FirebaseNotification extends Component
{
    componentDidMount()
    {
        // iOS: show permission prompt for the first call. later just check permission in user settings
        // Android: check permission in user settings
        FCM.requestPermissions()
            .then(() => console.log('granted'))
            .catch(() => console.log('notification permission rejected'));

        FCM.getFCMToken().then(async token =>
        {
            console.log('token', token);
            let isFirebaseTokenSent = await Setting.isFirebaseTokenSent();
            if (isFirebaseTokenSent)
            {
                sendFirebaseToken(token)
            }

        });

        this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) =>
        {
            // optional, do some component related stuff
            console.log('notificationListener', notif);
        });

        // initial notification contains the notification that launchs the app. If user launchs app by clicking banner, the banner notification info will be here rather than through FCM.on event
        // sometimes Android kills activity when app goes to background, and when resume it broadcasts notification before JS is run. You can use FCM.getInitialNotification() to capture those missed events.
        // initial notification will be triggered all the time even when open app by icon so send some action identifier when you send notification
    }

    componentWillUnmount()
    {
        // stop listening for events
        this.notificationListener.remove();
    }

    render()
    {
        return null;
    }

}