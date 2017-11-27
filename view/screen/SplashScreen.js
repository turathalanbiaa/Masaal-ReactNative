import React , {Component} from 'react'
import {View , Text} from 'react-native';
import Setting from "../../constant/Setting";
import {NavigationActions} from 'react-navigation';

export default class SplashScreen extends Component
{

    componentDidMount()
    {
        Setting.loadSettings();
        setTimeout(() =>
        {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' , params : {type : 1}}),
                ]
            });
            this.props.navigation.dispatch(resetAction)
        } , 2500)
    }

    render()
    {
        return (
            <View style={{flex : 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#3F51B5'}}>
                <Text style={{color : '#2B2B2B'}}>SplashScreen</Text>
            </View>
        )
    }

}