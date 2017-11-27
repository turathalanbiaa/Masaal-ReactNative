import React , {Component} from 'react';
import {View , Text} from 'react-native';
import String from './../../../res/string/String';
import RadioForm from 'react-native-simple-radio-button';

const languages = [
    {label: String.arabic , value: 'ar' },
    {label: String.english , value: 'en' },
    {label: String.french , value: 'fr' },
];

export default class LanguageRadio extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <View style={{marginTop : 18 , marginLeft: 12 , marginRight : 12 , alignItems : 'flex-start'}}>
                <Text>{String.choose_language}</Text>
                <RadioForm
                    style={{alignItems : 'flex-start' , marginTop : 6}}
                    radio_props={languages}
                    initial={this.props.initial === "ar" ? 0 : (this.props.initial === 'en' ? 1 : 2)}
                    onPress={(value) => {this.props.onPress(value)}}
                />
            </View>
        )
    }
}

LanguageRadio.defaultProps = {
    thirdOption : true
};