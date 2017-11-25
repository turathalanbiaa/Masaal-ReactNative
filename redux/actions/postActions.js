import Http from './../../utils/networking/Http';
import Link from './../../constant/Link';
import PostStorage from "../../utils/storage/PostStorage";

export function fetchRecentPosts(lang , type , offset = 0 , requestId)
{
    return function(dispatch)
    {
        if (offset === 0)
            dispatch({type : 'POST_FETCH_START'});
        else
            dispatch({type : 'POST_FETCH_MORE'});

        Http.fetch(Link.post.recent , {type : type , offset : offset , lang : lang})
            .then(async (result) =>
            {
                await fixPosts(result);

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


async function fixPosts(posts)
{
    let savedPostsKeys = await PostStorage.getKeys();

    const STORE = "@POST:";
    for (let i = 0; i < posts.length; i++)
    {
        let key = STORE + posts[i].id;
        posts[i].bookmark = savedPostsKeys.indexOf(key) !== -1;
    }
}