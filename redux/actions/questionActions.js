import Http from './../../utils/networking/Http';
import Link from './../../constant/Link';

export function fetchRecentQuestionsWithAnnouncements(offset = 0 , requestId)
{
    return function(dispatch)
    {
        if (offset === 0)
            dispatch({type : 'QUESTION_FETCH_START'});
        else
            dispatch({type : 'QUESTION_FETCH_MORE'});

        Http.fetch(Link.question.recent , {offset : offset , lang : 'en'})
            .then((result) =>
            {
                dispatch({type : 'QUESTION_FETCH_COMPLETE' , payload : {
                    result : result , requestId : requestId
                }});
            })
            .catch(() =>
            {
                dispatch({type : 'QUESTION_FETCH_FAIL'});
            })
    }
}