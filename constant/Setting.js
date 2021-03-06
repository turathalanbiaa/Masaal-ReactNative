import {AsyncStorage} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const STORE = "@SETTING";
export default class Setting
{
    static settings = {
        lang : DeviceInfo.getDeviceLocale() ,
        name : '' ,
        contentLang : 'ar' ,
        isFirebaseTokenSent : false ,
        setupComplete : '0'
    };

    static keys = {
        lang : 'lang' ,
        name : 'name' ,
        contentLang : 'CONTENT_LANG',
        isFirebaseTokenSent : 'FIREBASE_TOKEN' ,
        setupComplete : 'SETUP_COMPLETE'
    };

    static async loadSettings()
    {
        Setting.settings.lang = Setting.getCurrentLanguage();
        Setting.settings.contentLang = await Setting.load(Setting.keys.contentLang , 'ar');
        Setting.settings.name = await Setting.load(Setting.keys.name , '');
        Setting.settings.firebaseTokenSent = await Setting.load(Setting.keys.isFirebaseTokenSent , '0');
        Setting.settings.setupComplete = await Setting.load(Setting.keys.setupComplete , '0');
    }

    static getDeviceLanguage()
    {
        let local = DeviceInfo.getDeviceLocale();
        if (local.includes("en"))
            return "en";
        else if(local.includes("fr"))
            return "fr";
        else if (local.includes("ar"))
            return "ar";

        return "en";
    }

    static getCurrentLanguage()
    {
        return Setting.settings.contentLang;
    }

    static async load(key , defaultValue = null)
    {
        return new Promise((resolve) =>
        {
            let storeKey = STORE + ":" + key;
            AsyncStorage.getItem(storeKey).then((value) =>
            {
                if (value === null)
                    resolve(defaultValue);

                resolve(value);
            }).catch(() =>
            {
                resolve(defaultValue)
            });
        });
    }

    static async setFirebaseTokenSent(status)
    {
        await AsyncStorage.setItem(Setting.keys.isFirebaseTokenSent, status);
        Setting.settings.isSentFirebaseToken = status;
    }

    static async isFirebaseTokenSent()
    {
        return await Setting.load(Setting.keys.isFirebaseTokenSent , '0');
    }

    static async setupComplete()
    {
        let key = STORE + ":" + Setting.keys.setupComplete;
        await AsyncStorage.setItem(key , '1');
    }

    static isSetupComplete()
    {
        return Setting.settings.setupComplete === '1';
    }

    static changeName(name)
    {
        let key = STORE + ":" + Setting.keys.name;
        AsyncStorage.setItem(key , name).then(() =>
        {
            Setting.settings.name = name;
        });
    }

    static changeLang(lang)
    {
        let key = STORE + ":" + Setting.keys.contentLang;
        AsyncStorage.setItem(key , lang).then(() =>
        {
            Setting.settings.contentLang = lang;
        });
    }

    static isRTL()
    {
        return Setting.getCurrentLanguage() === "ar";
    }

    static isRightLayout()
    {
        return Setting.getDeviceLanguage() === "ar";
    }

}