import React from 'react';
import Screen from './Screen';
import String from './../../res/string/String';
import {View} from 'react-native';
import {Content, Item, Input, Text, Button, Form, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {questionSent, sendQuestion} from "../../redux/actions/questionActions";
import DeviceInfo from 'react-native-device-info';
import QuestionTypeRadio from "../component/question/QuestionTypeRadio";
import QuestionPrivacyRadio from "../component/question/QuestionPrivacyRadio";
import Setting from "../../constant/Setting";
import Snackbar from 'react-native-snackbar';

let input = null;

class SendQuestion extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {type: 1, privacy: 1};
    }

    _sendQuestion = () =>
    {
        if (!this.validate())
        {
            return;
        }

        let uuid = DeviceInfo.getUniqueID();
        let text = input._root._lastNativeText;
        let lang = Setting.getCurrentLanguage();
        this.props.dispatch(sendQuestion(text , lang, this.state.type, this.state.privacy, uuid));

    };

    validate = () =>
    {
        let text = input._root._lastNativeText;
        if (text.trim().length <= 10)
        {
            Snackbar.show({
                title: String.question_length_must_be_more_than_10_letters,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor : '#E91E63'
            });
            return false;
        }
        return true;
    };

    displayToasts = () =>
    {
        if (this.props.complete)
        {
            if (this.props.success)
            {
                Snackbar.show({
                    title: String.question_sent,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor : '#009688'
                });

                if (input !== null)
                {
                    input.setNativeProps({text: ''});
                    input._root._lastNativeText = '';
                }
            }
            else
            {
                Snackbar.show({
                    title: String.question_didnot_sent,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor : '#E91E63'
                });
            }

            this.props.dispatch(questionSent());
        }
    };

    renderContent()
    {

        this.displayToasts();

        return (
            <Content style={{padding: 8}}>

                <Form>

                    <Item>

                        <Input
                            ref={component => input = component}
                            placeholder={String.what_is_your_question}
                            autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true} numberOfLines={5} autoGrow={true}
                            style={{textAlign : Setting.isRTL() ? 'right' : 'left'}}/>

                    </Item>

                    <QuestionTypeRadio onPress={(value) =>
                    {
                        this.setState({type: value})
                    }}/>

                    <QuestionPrivacyRadio onPress={(value) =>
                    {
                        this.setState({privacy: value})
                    }}/>

                </Form>

                {
                    this.props.sending ?
                        <Spinner color='blue'/>
                        :
                        <View>
                            <Button full rounded onPress={this._sendQuestion} style={{marginTop: 20}}><Text>{String.send}</Text></Button>
                            <View style={{padding : 12}}/>
                        </View>
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
    return {
        sending: store.sendQuestionReducer.sending,
        complete: store.sendQuestionReducer.complete,
        success: store.sendQuestionReducer.success
    }
})(SendQuestion)