import React , {Component} from 'react';
import {View , Text} from 'react-native';
import String from './../../../res/string/String';
import RadioForm from 'react-native-simple-radio-button';



export default class QuestionPrivacyRadio extends Component
{
    render()
    {
        const privacy_radio_props = [
            {label : String.public , value : 1},
            {label : String.private , value : 2},
        ];

        return (
            <View style={{marginTop : 18 , marginLeft: 12 , marginRight : 12 , alignItems : 'flex-start'}}>
                <Text>{String.privacy}</Text>
                <RadioForm
                    style={{alignItems : 'flex-start' , marginTop : 6}}
                    radio_props={privacy_radio_props}
                    initial={0}
                    onPress={(value) => {this.props.onPress(value)}}
                />
            </View>
        )
    }
}