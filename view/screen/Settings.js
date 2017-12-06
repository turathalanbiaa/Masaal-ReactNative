import React from 'react';
import {View , Platform} from 'react-native';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content, Item, Input, Button, Form, Spinner , Icon} from 'native-base';
import Setting from "../../constant/Setting";
import Http from "../../utils/networking/Http";
import Link from "../../constant/Link";
import DeviceInfo from 'react-native-device-info';
import Snackbar from 'react-native-snackbar';

let nameInput = null;

export default class Settings extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {sending : false };
    }

    componentDidMount()
    {
        let name = Setting.settings.name.trim() === "" ? String.new_user : Setting.settings.name;
        nameInput.setNativeProps({text: name});
        nameInput._root._lastNativeText = name;
    }

    changeName = () =>
    {
        let name = nameInput._root._lastNativeText.trim();

        if (name === "")
        {
            Snackbar.show({
                title: String.name_empty,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor : '#E91E63'
            });
            return;
        }

        let params = {
            deviceUUID : DeviceInfo.getUniqueID() ,
            name : name ,
            deviceType : Platform.os === "ios" ? 1 : 2
        };

        this.setState({sending : true});
        Http.post(Link.settings.changeName , params).then((response) =>
        {
            if (response.success)
            {
                Setting.changeName(name);
                Snackbar.show({
                    title: String.name_has_been_changed,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor : '#009688'
                });
            }
            else
            {
                Snackbar.show({
                    title: String.name_didnot_changed_check_your_internet_connection,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor : '#E91E63'
                });
            }

            this.setState({sending : false});
        }).catch(() =>
        {
            Snackbar.show({
                title: String.name_didnot_changed_check_your_internet_connection,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor : '#E91E63'
            });
            this.setState({sending : false});
        });

    };

    renderContent()
    {
        return (
            <Content style={{padding: 8}}>

                <Form>

                    <View style={{flex: 1 , flexDirection : 'row' , marginTop : 8 , marginBottom : 8}}>
                        <Item style={{flex : 0.8}}>
                            <Input
                                ref={component => nameInput = component}
                                placeholder={String.your_name}
                                style={{textAlign : Setting.isRTL() ? 'right' : 'left'}}
                                autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}
                            />
                        </Item>

                                <Button transparent style={{flex : 0.2 , justifyContent: 'center' , alignItems : 'center'}} onPress={this.changeName}>
                                    {
                                        this.state.sending ?
                                            <Spinner style={{flex : 0.2}} color='blue'/>
                                            :
                                            <Icon style={{fontSize : 28 }} name="md-checkmark-circle"/>
                                    }
                                </Button>
                    </View>

                </Form>


            </Content>
        )
    }

    title = () =>
    {
        return String.settings;
    }
}