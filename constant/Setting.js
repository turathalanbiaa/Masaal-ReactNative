import {AsyncStorage} from 'react-native';

const STORE = "@SETTING";
export default class Setting
{
    static settings = {
        lang : 'en' ,
        name : ''
    };

    static async loadSettings()
    {
        let keys = await  AsyncStorage.getAllKeys();
        console.log(keys);

        Setting.settings.lang = await Setting.load('lang' , 'ar');
        Setting.settings.name = await Setting.load('name' , '');
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
        let key = STORE + ":lang";
        AsyncStorage.setItem(key , lang).then(() =>
        {
            Setting.settings.lang = lang;
            callback();
        });
    }

    static changeName(name)
    {
        let key = STORE + ":name";
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