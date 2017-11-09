import React , {Component} from 'react';
import {Button , Text} from 'native-base';
import {NavigationActions} from 'react-navigation';

export default class MyQuestions extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <Button onPress={() => {
                const backAction = NavigationActions.back();
                this.props.navigation.dispatch(backAction);
            }} style={{marginTop : 50}}><Text>MyQuestions</Text></Button>
        );
    }
}