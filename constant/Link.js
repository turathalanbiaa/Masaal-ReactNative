

export default class Link
{
    static MAIN_LINK = "http://localhost:8000/";
    static MAIN_API = Link.MAIN_LINK + "api/";

    static question = {
        recent : Link.MAIN_API + "question/recent"
    }
}
