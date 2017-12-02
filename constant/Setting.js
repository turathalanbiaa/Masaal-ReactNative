import {AsyncStorage} from 'react-native';

const STORE = "@SETTING";
export default class Setting
{
    static settings = {
        lang : 'en' ,
        name : '' ,
        isFirebaseTokenSent : false ,
        setupComplete : '0'
    };

    static keys = {
        lang : 'lang' ,
        name : 'name' ,
        isFirebaseTokenSent : 'FIREBASE_TOKEN' ,
        setupComplete : 'SETUP_COMPLETE'
    };

    static async loadSettings()
    {
        Setting.settings.lang = await Setting.load(Setting.keys.lang , 'ar');
        Setting.settings.name = await Setting.load(Setting.keys.name , '');
        Setting.settings.firebaseTokenSent = await Setting.load(Setting.keys.isFirebaseTokenSent , '0');
        Setting.settings.setupComplete = await Setting.load(Setting.keys.setupComplete , '0');
    }

    static async load(key , defaultValue = null)
    {
        return new Promise((resolve) =>
        {
            let storeKey = STORE + ":" + key;
            AsyncStorage.getItem(storeKey).then((value) =>
            {
                if (value === null)
                    resolve(defaultValue);

                resolve(value);
            }).catch(() =>
            {
                resolve(defaultValue)
            });
        });
    }

    static changeLanguage(lang , callback)
    {
        let key = STORE + ":" + Setting.keys.lang;
        AsyncStorage.setItem(key , lang).then(() =>
        {
            Setting.settings.lang = lang;
            callback();
        });
    }

    static async setFirebaseTokenSent(status)
    {
        await AsyncStorage.setItem(Setting.keys.isFirebaseTokenSent, status);
        Setting.settings.isSentFirebaseToken = status;
    }

    static async isFirebaseTokenSent()
    {
        return await Setting.load(Setting.keys.isFirebaseTokenSent , '0');
    }

    static async setupComplete()
    {
        let key = STORE + ":" + Setting.keys.setupComplete;
        await AsyncStorage.setItem(key , '1');
    }

    static isSetupComplete()
    {
        return Setting.settings.setupComplete === '1';
    }

    static changeName(name)
    {
        let key = STORE + ":" + Setting.keys.name;
        AsyncStorage.setItem(key , name).then(() =>
        {
            Setting.settings.name = name;
        });
    }

    static isRTL()
    {
        return Setting.settings.lang === "ar";
    }

}