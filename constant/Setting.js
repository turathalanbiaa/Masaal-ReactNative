import {AsyncStorage} from 'react-native';

const STORE = "@SETTING";
export default class Setting
{
    static settings = {
        lang : 'en'
    };

    static changeLanguage(lang)
    {
        let key = STORE + ":lang";
        AsyncStorage.setItem(key , lang).then(() =>
        {
            Setting.settings.lang = lang;
        });
    }

    static isRTL()
    {
        return Setting.settings.lang === "ar";
    }

}