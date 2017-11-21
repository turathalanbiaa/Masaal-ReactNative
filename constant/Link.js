

export default class Link
{
    static MAIN_LINK = "http://localhost:8000/";
    static MAIN_API = Link.MAIN_LINK + "api/";
    static IMAGES = Link.MAIN_LINK + "storage/images/";

    static question = {
        recent : Link.MAIN_API + "question/recent",
        send : Link.MAIN_API + "question/new"
    };

    static post = {
        recent : Link.MAIN_API + "post/recent"
    }
}
