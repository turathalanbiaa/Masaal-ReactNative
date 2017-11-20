import React from 'react';
import { View} from 'native-base';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content , Item , Input , Text , Button , Form , Spinner , Toast} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import {sendQuestion} from "../../redux/actions/questionActions";
import DeviceInfo from 'react-native-device-info';

const type_radio_props = [
    {label: String.feqhi , value: 1 },
    {label: String.aqaedi , value: 2 },
    {label: String.i_dont_know , value: 1 }
];

let input = null;

class SendQuestion extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {text : '' , type : 1};
    }

    _sendQuestion = () =>
    {
        if(!this.validate())
            return;

        let uuid = DeviceInfo.getUniqueID();
        let text = input._root._lastNativeText;
        this.props.dispatch(sendQuestion(text , this.state.type , uuid));

    };

    validate = () =>
    {
        let text = input._root._lastNativeText;
        if(text.trim().length <= 10)
        {
            Toast.show({   text: String.question_length_must_be_more_than_10_letters , type:'danger' , position: 'bottom', duration : 3000});
            return false;
        }

        return true;
    };

    renderContent()
    {

        return (
            <Content style={{padding : 8}}>

                <Form>

                    <Item>

                        <Input
                            ref={component => input = component}
                            placeholder={String.what_is_your_question}
                            autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}
                            style={{height : 250}}/>

                    </Item>

                    <View style={{marginTop : 18 , marginLeft: 12 , marginRight : 12 , alignItems : 'flex-start'}}>
                        <Text>Type Of Question</Text>
                        <RadioForm
                            style={{alignItems : 'flex-start' , marginTop : 6}}
                            radio_props={type_radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({type:value})}}
                        />
                    </View>

                </Form>

                {
                    this.props.sending ?
                        <Spinner color='blue' />
                        :
                        <Button full rounded onPress={this._sendQuestion} style={{marginTop : 20}}><Text>{String.send}</Text></Button>
                }

            </Content>
        )
    }

    title = () =>
    {
        return String.send_question;
    }
}

export default connect((store) =>
{
    if(store.sendQuestionReducer.complete)
    {
        if(store.sendQuestionReducer.success)
        {
            Toast.show({   text: String.question_sent, type:'success' , position: 'bottom', duration : 3000});

            if(input !== null)
            {
                input.setNativeProps({text : ''});
                input._root._lastNativeText = '';
            }
        }
        else
        {
            Toast.show({   text: String.question_didnot_sent, type:'danger' , position: 'bottom', duration : 3000});
        }
    }

    return {
        sending : store.sendQuestionReducer.sending,
        complete : store.sendQuestionReducer.complete ,
        success : store.sendQuestionReducer.success
    }
})(SendQuestion)