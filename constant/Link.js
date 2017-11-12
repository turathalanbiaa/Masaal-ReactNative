

export default class Link
{
    static MAIN_LINK = "http://180.100.1.132:8000/";
    static MAIN_API = Link.MAIN_LINK + "api/";
    static IMAGES = Link.MAIN_LINK + "storage/images/";

    static question = {
        recent : Link.MAIN_API + "question/recent"
    }
}
