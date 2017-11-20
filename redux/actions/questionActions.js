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


export function sendQuestion(text , type , uuid)
{
    console.log(uuid);
    return function(dispatch)
    {
        dispatch({type : 'SENDING_QUESTION_START'});

        let params = {
            content : text,
            type : type ,
            lang : 'en' ,
            deviceUUID : uuid
        };

        Http.post(Link.question.send , params)
            .then(response =>
            {
                console.log(response);
                if (response.success)
                    dispatch({type : 'SENDING_QUESTION_DONE'});
                else
                    dispatch({type : 'SENDING_QUESTION_FAIL'});
            })
            .catch((e) =>
            {
                console.log(e);
                dispatch({type : 'SENDING_QUESTION_FAIL'});
            })
    }
}

export function startNewQuestion()
{
    return {
        type : 'SENDING_QUESTION_NEW'
    }
}