import React , {Component} from 'react';
import {View , Text} from 'react-native';
import String from './../../../res/string/String';
import RadioForm from 'react-native-simple-radio-button';


export default class QuestionTypeRadio extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        const type_radio_props = [
            {label: String.feqhi , value: 1 },
            {label: String.aqaedi , value: 2 },
        ];

        if(this.props.thirdOption)
            type_radio_props.push({label: String.i_dont_know , value: 1 });

        return (
            <View style={{marginTop : 18 , marginLeft: 12 , marginRight : 12 , alignItems : 'flex-start'}}>
                <Text>{String.type_of_question}</Text>
                <RadioForm
                    style={{alignItems : 'flex-start' , marginTop : 6}}
                    radio_props={type_radio_props}
                    initial={0}
                    onPress={(value) => {this.props.onPress(value)}}
                />
            </View>
        )
    }
}

QuestionTypeRadio.defaultProps = {
    thirdOption : true
};