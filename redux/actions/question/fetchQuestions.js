import Http from "../../../utils/networking/Http";
import QuestionStorage from "../../../utils/storage/QuestionStorage";

export default function fetchQuestions(url, params, requestId)
{
    return function (dispatch)
    {

        if (params.offset !== undefined)
        {
            if (params.offset === 0)
            {
                dispatch({type: 'QUESTION_FETCH_START'});
            }
            else
            {
                dispatch({type: 'QUESTION_FETCH_MORE'});
            }
        }
        else
        {
            dispatch({type: 'QUESTION_FETCH_START'});
        }

        Http.fetch(url, params)
            .then(async (result) =>
            {
                await fixBookmarkState(result.questions);
                dispatch({type: 'QUESTION_FETCH_COMPLETE', payload: {result: result, requestId: requestId}});
            })
            .catch(() =>
            {
                dispatch({type: 'QUESTION_FETCH_FAIL'});
            })
    }
}


async function fixBookmarkState(questions)
{
    const STORE = "@QUESTION:";
    let savedQuestionsKeys = await QuestionStorage.getKeys();
    questions.map((question) =>
    {
        let key = STORE + question.id;
        question.bookmark = savedQuestionsKeys.indexOf(key) !== -1;
    });
}