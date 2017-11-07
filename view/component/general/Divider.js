import React , {Component} from 'react';
import {View} from 'react-native';

export default class Divider extends Component
{
    render()
    {
        return (
            <View style={{height : this.props.weight , flex : 1 , backgroundColor : this.props.color}}/>
        );
    }
}

Divider.defaultProps = {
    weight : 2 ,
    color : '#AAAAAA'
};