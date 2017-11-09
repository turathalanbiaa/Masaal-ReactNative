import React , {Component} from 'react';
import { View} from 'react-native';
import {Button , Text} from 'native-base';

export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    navigate = (screen) =>
    {
        console.log(screen);
        const {navigate} = this.props.navigation;
        navigate(screen);
    };

    render()
    {
        console.log(this.props);
        return (
            <View>
                <Button onPress={() => this.navigate('Home')} style={{marginTop : 50}}><Text>Home</Text></Button>
                <Button onPress={() => this.navigate('Posts')} style={{marginTop : 50}}><Text>Posts</Text></Button>
                <Button onPress={() => this.navigate('SendQuestion')} style={{marginTop : 50}}><Text>SendQuestion</Text></Button>
                <Button onPress={() => this.navigate('MyQuestions')} style={{marginTop : 50}}><Text>MyQuestions</Text></Button>
                <Button onPress={() => this.navigate('Settings')} style={{marginTop : 50}}><Text>Settingss</Text></Button>
            </View>
        );
    }
}