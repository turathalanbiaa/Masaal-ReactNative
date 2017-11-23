let initialState = {
    fetching: false,
    fetchingMore: false,
    questions: [],
    fetchingError: false,
    announcements: [],
    newCount : 0,
    requestId: 0
};
export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'QUESTION_FETCH_START'     :
            return {
                ...state,
                fetching: true,
                fetchingMore: false,
                fetchingError: false,
                questions: [],
                announcements: [],
                requestId: state.requestId + 1 ,
            };

        case 'QUESTION_FETCH_MORE'      :
            return {
                ...state,
                fetching: false,
                fetchingMore: true,
                fetchingError: false ,
                requestId: state.requestId + 1
            };

        case 'QUESTION_FETCH_COMPLETE'  :
            if (action.payload.requestId+1 !== state.requestId)
            {
                return {
                    ...state,
                    fetching: false,
                    fetchingMore: false,
                    fetchingError: false ,
                    newCount : 0 ,
                };
            }
            return {
                ...state,
                fetching: false,
                fetchingMore: false,
                fetchingError: false,
                newCount : action.payload.result.questions.length,
                questions: state.questions.concat(action.payload.result.questions),
                announcements: action.payload.result.announcements ,
                requestId : state.requestId + 1
            };

        case 'QUESTION_FETCH_FAIL'      :
            return {...state, fetching: false, fetchingMore: false, fetchingError: true};
    }

    return state;
}