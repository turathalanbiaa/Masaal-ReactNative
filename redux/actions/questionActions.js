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
    return function (dispatch)
    {
        dispatch({type: 'QUESTION_FETCH_START'});

        Http.fetch(Link.question.search, {text: text, category: category, lang: 'en'})
            .then(async (result) =>
            {
                let savedQuestionsKeys = await QuestionStorage.getKeys();
                const STORE = "@QUESTION:";
                for (let i = 0; i < result.questions.length; i++)
                {
                    let key = STORE + result.questions[i].id;
                    result.questions[i].bookmark = savedQuestionsKeys.indexOf(key) !== -1;
                }

                dispatch({
                    type: 'QUESTION_FETCH_COMPLETE', payload: {
                        result: {...result, announcements: []}, requestId: requestId
                    }
                });
            })
            .catch(() =>
            {
                dispatch({type: 'QUESTION_FETCH_FAIL'});
            })
    }
}

export function searchByTag(tagId, requestId)
{
    return function (dispatch)
    {
        dispatch({type: 'QUESTION_FETCH_START'});

        Http.fetch(Link.question.searchByTag, {tagId: tagId})
            .then(async (result) =>
            {
                let savedQuestionsKeys = await QuestionStorage.getKeys();
                const STORE = "@QUESTION:";
                for (let i = 0; i < result.questions.length; i++)
                {
                    let key = STORE + result.questions[i].id;
                    result.questions[i].bookmark = savedQuestionsKeys.indexOf(key) !== -1;
                }

                dispatch({
                    type: 'QUESTION_FETCH_COMPLETE', payload: {
                        result: {...result, announcements: []}, requestId: requestId
                    }
                });
            })
            .catch(() =>
            {
                dispatch({type: 'QUESTION_FETCH_FAIL'});
            })
    }
}

export function sendQuestion(text, type, privacy, uuid)
{
    return function (dispatch)
    {
        dispatch({type: 'SENDING_QUESTION_START'});

        let params = {
            content: text,
            type: type,
            lang: 'en',
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
