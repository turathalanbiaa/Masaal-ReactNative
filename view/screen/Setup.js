import React , {Component} from 'react';
import {View , Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Container , Content , Form , Input , Item ,Button , Text , Spinner} from 'native-base';
import Header from "../component/general/header/Header";
import Http from "../../utils/networking/Http";
import Link from "../../constant/Link";
import FCM from 'react-native-fcm';
import Setting from "../../constant/Setting";
import {NavigationActions} from 'react-navigation';
import Snackbar from 'react-native-snackbar';
import LanguageRadio from './../component/general/LanguageRadio'

let nameInput;

export default class Setup extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            title : '' ,
            saveButton : '',
            placeHolder : '',
            errorSendMessage : '',

            sending : false
        };

    }

    componentWillMount()
    {
        let local = DeviceInfo.getDeviceLocale();
        if (local.includes("fr"))
        {
            this.setFr();
            this.setState({initialLang : 'fr'});
        }
        else if(local.includes("en"))
        {
            this.setEn();
            this.setState({initialLang : 'en'});
        }
        else
        {
            this.setAr();
            this.setState({initialLang : 'ar'});
        }
    }

    save = async () =>
    {
        let deviceUUID = DeviceInfo.getUniqueID();

        let name = nameInput._root._lastNativeText;
        if(name === undefined)
            name = '';
        else
            name = name.trim();

        let token = await FCM.getFCMToken();

        if (name === "")
            return;

        this.setup(deviceUUID , token , name);
    };

    setup = (deviceUUID , token , name) =>
    {
        console.log(deviceUUID);
        let params = {
            deviceUUID : deviceUUID ,
            token : token ,
            deviceType : Platform.OS === "ios" ? '1' : '2',
            name : name
        };

        this.setState({sending : true});
        Http.post(Link.settings.setup , params).then(async () =>
        {
            await Setting.setupComplete();
            await Setting.changeName(name);
            setTimeout(() =>
            {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' , params : {type : 1}}),
                    ]
                });
                this.props.navigation.dispatch(resetAction);

            } , 1500);

        }).catch((e) =>
        {
            console.log(e);
            this.setState({sending : false});

            Snackbar.show({
                title: this.state.errorSendMessage,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor : '#E91E63'
            });
        });
    };

    onLanguageChanged = (lang) =>
    {
        Setting.changeLang(lang);
    };


    render()
    {
        return (
            <Container>

                <Header title={this.state.title}
                        left={<View/>}/>

                <Content style={{padding: 8}}>

                    <Form>

                        <Item>
                            <Input
                                ref={component => nameInput = component}
                                placeholder={this.state.placeHolder}
                                style={{textAlign : 'center'}}
                                autoCapitalize="none" editable={!this.props.sending} autoCorrect={false} multiline={true}
                            />
                        </Item>

                        <LanguageRadio initial={Setting.getCurrentLanguage()} onPress={this.onLanguageChanged}/>

                    </Form>

                    {
                        this.state.sending ?
                            <Spinner color="blue"/>
                            :
                            <Button full rounded onPress={this.save} style={{marginTop: 20}}><Text>{this.state.saveButton}</Text></Button>
                    }

                </Content>

            </Container>
        )
    }

    setAr = () => {this.setState({title : 'الاجوبة الميسرة', errorSendMessage : 'فشل : تحقق من الاتصال بالانترنت' , saveButton : 'حفظ' , placeHolder : 'اكتب اسمك هنا' , lang : 'ar'})};
    setEn = () => {this.setState({title : 'App Titlt En' , errorSendMessage : "Fail : Check your internet connection" , saveButton : 'Save' , placeHolder : 'Write Your Name Here' , lang : 'en'})};
    setFr = () => {this.setState({title : 'App Titlt Fr' , errorSendMessage : "Fail : Check your internet connection Fr" , saveButton : 'Save Fr' , placeHolder : 'Write Your Name Here Fr' , lang : 'fr'})};

}