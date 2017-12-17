import Http from './../../utils/networking/Http';
import Link from './../../constant/Link';
import QuestionStorage from "../../utils/storage/QuestionStorage";
import fetchQuestions from "./question/fetchQuestions";

export function fetchRecentQuestionsWithAnnouncements(type, lang, offset = 0, requestId)
{
    return fetchQuestions(Link.question.recent, {type: type, lang: lang, offset: offset}, requestId);
}

export function fetchMyQuestions(uuid , requestId)
{
    return fetchQuestions(Link.question.my , {deviceUUID : uuid} , requestId);
}

export function getBookmark(requestId)
{
    return function (dispatch)
    {
        dispatch({type: 'QUESTION_FETCH_START'});

        QuestionStorage.getQuestions().then((questions) =>
        {
            for (let i = 0; i < questions.length; i++)
            {
                questions[i].bookmark = true;
            }

            dispatch({
                type: 'QUESTION_FETCH_COMPLETE',
                payload: {result: {questions: questions, announcements: []}, requestId: requestId}
            });
        }).catch(() =>
        {
            dispatch({type: 'QUESTION_FETCH_FAIL'});
        });
    }
}

export function search(text, category, requestId)
{
    return fetchQuestions(Link.question.search , {text: text, category: category, lang: 'en'} , requestId);
}

export function searchByTag(tagId, requestId)
{
    return fetchQuestions(Link.question.searchByTag , {tagId: tagId} , requestId);
}

export function sendQuestion(text , lang, type, privacy, uuid)
{
    return function (dispatch)
    {
        dispatch({type: 'SENDING_QUESTION_START'});

        let params = {
            content: text,
            type: type,
            lang: lang,
            privacy: privacy,
            deviceUUID: uuid
        };

        Http.post(Link.question.send, params)
            .then(response =>
            {
                if (response.success)
                {
                    dispatch({type: 'SENDING_QUESTION_DONE'});
                }
                else
                {
                    dispatch({type: 'SENDING_QUESTION_FAIL'});
                }
            })
            .catch(() =>
            {
                dispatch({type: 'SENDING_QUESTION_FAIL'});
            })
    }
}


export function questionSent()
{
    return {
        type : 'QUESTION_SENT'
    }
}