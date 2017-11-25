import React from 'react';
import {View} from 'native-base';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content, Item, Input, Text, Button, Form, Spinner, Toast , Icon} from 'native-base';
import {connect} from 'react-redux';
import Divider from "../component/general/Divider";
import LanguageRadio from "../component/general/LanguageRadio";
import Setting from "../../constant/Setting";

let nameInput = null;


class Settings extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {lang: Setting.settings.lang};
    }

    renderContent()
    {

        return (
            <Content style={{padding: 8}}>

                <Form>

                    <View style={{flex: 1 , flexDirection : 'row'}}>

                        <Item>

                            <Input
                                ref={component => nameInput = component}
                                placeholder={String.what_is_your_question}
                                autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}
                                style={{flex : 0.8}}/>

                            <Button style={{flex : 0.2 , justifyContent: 'center' , alignItems : 'center'}}><Icon name="md-checkmark-circle"/></Button>

                        </Item>


                    </View>

                    <Divider/>

                    <LanguageRadio/>

                </Form>

                {
                    this.props.sending ?
                        <Spinner color='blue'/>
                        :
                        <Button full rounded onPress={this._sendQuestion}
                                style={{marginTop: 20}}><Text>{String.send}</Text></Button>
                }

            </Content>
        )
    }

    title = () =>
    {
        return String.settings;
    }
}

export default connect(() =>
{
    return {}
})(Settings)