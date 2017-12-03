

export default class Link
{
    static MAIN_LINK = "http://192.168.0.118:8000/";
    static MAIN_API = Link.MAIN_LINK + "api/";
    static IMAGES = Link.MAIN_LINK + "storage/images/";

    static question = {
        recent : Link.MAIN_API + "question/recent",
        send : Link.MAIN_API + "question/new",
        search : Link.MAIN_API + "question/search",
        searchByTag : Link.MAIN_API + "question/searchByTag",
        my : Link.MAIN_API + "question/my"
    };

    static settings = {
        changeName : Link.MAIN_API + "settings/change/name" ,
        firebaseToken : Link.MAIN_API + "notification/set-firebase-token" ,
        setup : Link.MAIN_API + "setup"
    };

    static tag = {
        all : Link.MAIN_API + "tag/all"
    };

    static post = {
        recent : Link.MAIN_API + "post/recent"
    }
}
