import Http from './../../utils/networking/Http';
import Link from './../../constant/Link';

export function fetchRecentPosts(offset = 0 , requestId)
{
    return function(dispatch)
    {
        if (offset === 0)
            dispatch({type : 'POST_FETCH_START'});
        else
            dispatch({type : 'POST_FETCH_MORE'});

        Http.fetch(Link.post.recent , {offset : offset , lang : 'en'})
            .then((result) =>
            {
                dispatch({type : 'POST_FETCH_COMPLETE' , payload : {
                    result : result , requestId : requestId
                }});
            })
            .catch(() =>
            {
                dispatch({type : 'POST_FETCH_FAIL'});
            })
    }
}
