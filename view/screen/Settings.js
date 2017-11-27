import React from 'react';
import {View , I18nManager , Platform} from 'react-native';
import Screen from './Screen';
import String from './../../res/string/String';
import {Content, Item, Input, Button, Form, Spinner , Icon} from 'native-base';
import LanguageRadio from "../component/general/LanguageRadio";
import Setting from "../../constant/Setting";
import Http from "../../utils/networking/Http";
import Link from "../../constant/Link";
import DeviceInfo from 'react-native-device-info';
import Toaster from "../../utils/ui/Toaster";
import RNRestart from 'react-native-restart'; // Import package from node modules

let nameInput = null;

export default class Settings extends Screen
{
    constructor(props)
    {
        super(props);
        this.state = {lang: Setting.settings.lang , sending : false };
    }

    componentDidMount()
    {
        I18nManager.forceRTL(Setting.isRTL());
        let name = Setting.settings.name.trim() === "" ? String.new_user : Setting.settings.name;
        nameInput.setNativeProps({text: name});
        nameInput._root._lastNativeText = name;
    }

    changeName = () =>
    {
        let name = nameInput._root._lastNativeText.trim();

        if (name === "")
        {
            Toaster.show(String.name_empty , 'danger');
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
                Toaster.show(String.name_has_been_changed , 'success')
            }
            else
            {
                Toaster.show(String.name_didnot_changed_check_your_internet_connection , 'danger')
            }

            this.setState({sending : false});
        }).catch(() =>
        {
            Toaster.show(String.name_didnot_changed_check_your_internet_connection , 'danger');
            this.setState({sending : false});
        });

    };

    changeLanguage = (value) =>
    {
        Setting.changeLanguage(value , () =>
        {
            I18nManager.forceRTL(Setting.isRTL());
            RNRestart.Restart();
        });
    };

    renderContent()
    {
        console.log(this.state.lang);
        return (
            <Content style={{padding: 8}}>

                <Form>

                    <View style={{flex: 1 , flexDirection : 'row' , marginTop : 8 , marginBottom : 8}}>
                        <Item style={{flex : 0.8}}>
                            <Input
                                ref={component => nameInput = component}
                                placeholder={String.your_name}
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

                    {
                        this.state.lang === '' ?
                            null
                            :
                            <LanguageRadio initial={this.state.lang} onPress={this.changeLanguage}/>
                    }

                </Form>


            </Content>
        )
    }

    title = () =>
    {
        return String.settings;
    }
}