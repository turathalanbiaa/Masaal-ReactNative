import Http from './../../utils/networking/Http';
import Link from './../../constant/Link';
import PostStorage from "../../utils/storage/PostStorage";

export function fetchRecentPosts(offset = 0 , requestId)
{
    return function(dispatch)
    {
        if (offset === 0)
            dispatch({type : 'POST_FETCH_START'});
        else
            dispatch({type : 'POST_FETCH_MORE'});

        Http.fetch(Link.post.recent , {offset : offset , lang : 'en'})
            .then(async (result) =>
            {
                let savedPostsKeys = await PostStorage.getKeys();

                const STORE = "@POST:";
                for (let i = 0; i < result.length; i++)
                {
                    let key = STORE + result[i].id;
                    result[i].bookmark = savedPostsKeys.indexOf(key) !== -1;
                }

                dispatch({
                    type: 'POST_FETCH_COMPLETE', payload: {
                        result: result, requestId: requestId
                    }
                });
            })
            .catch(() =>
            {
                dispatch({type : 'POST_FETCH_FAIL'});
            })
    }
}
