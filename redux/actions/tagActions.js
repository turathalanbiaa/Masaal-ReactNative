import Http from "../../utils/networking/Http";
import Link from "../../constant/Link";

export function getTags(lang , requestId)
{
    return function(dispatch)
    {
        dispatch({type : "FETCH_TAG_START"});

        Http.fetch(Link.tag.all , {lang : lang}).then((response) =>
        {
            dispatch({type : "FETCH_TAG_DONE" , payload : {tags : response , requestId : requestId}});
        }).catch(() =>
        {
            dispatch({type : "FETCH_TAG_FAIL"});
        })
    }
}