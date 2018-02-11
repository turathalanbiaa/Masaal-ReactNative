import React , {Component} from 'react'
import {View , Text} from 'react-native';
import Setting from "../../constant/Setting";
import {NavigationActions} from 'react-navigation';
import {Image} from 'react-native-animatable';
import String from './../../res/string/String';

import FCM from 'react-native-fcm';

export default class SplashScreen extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {image : 1 , loadingSettingsDone: false};
    }

    async componentDidMount()
    {
        await Setting.loadSettings().then(() => this.setState({loadingSettingsDone: true}));

        console.log(Setting.settings);

        FCM.getInitialNotification().then(notif =>
        {
            if (notif === undefined || !notif.type)
            {
                if (Setting.isSetupComplete())
                {
                    this.gotoHomeScreen();
                }
                else
                {
                    this.gotoSetupScreen();
                }
            }
            else
            {
                console.log(notif);
                if (notif !== undefined && notif.type)
                {
                    const {navigate} = this.props.navigation;
                    switch (parseInt(notif.type))
                    {
                        case 1:navigate('Home', {type : 1});break;
                        case 2:navigate('Home', {type : 2});break;
                        case 3:navigate('Posts', {type : 1});break;
                        case 4:navigate('Posts', {type : 2});break;
                        case 5:navigate('MyQuestions');break;
                        case 6:navigate('Home', {type : 1});break;
                    }
                }
            }
        });

    }

    gotoHomeScreen = ()=>
    {
        setTimeout(() =>
        {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' , params : {type : 1}}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } , 4000);
    };

    gotoSetupScreen = ()=>
    {
        setTimeout(() =>
        {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Setup' , params : {type : 1}}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } , 4000);
    };

    render()
    {
        return (
            <View style={{flex : 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#7986CB'}}>

                {
                    this.state.image === 1 ?
                        <Image style={{width : 128 , height : 116}} animation="fadeOut" source={require('./../../res/image/icon/logo_1.png')}
                               delay={1500}
                               duration={500}
                               onAnimationEnd={() => this.setState({image : 2})}/>
                        :
                        <Image style={{width : 128 , height : 116}} animation="fadeIn" source={require('./../../res/image/icon/logo_2.png')}/>
                }

                {
                    this.state.loadingSettingsDone &&
                    <View>
                        <Text style={{fontFamily : 'JF Flat' , fontSize : 20 , marginTop : 16}}>{String.app_name}</Text>
                        <Text style={{fontFamily : 'JF Flat' , fontSize : 20 , marginTop : 16}}>{String.in_feqh_and_aqead}</Text>
                    </View>
                }

            </View>
        )
    }

}