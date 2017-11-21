let initialState = {
    fetching: false,
    fetchingMore: false,
    posts: [],
    fetchingError: false,
    requestId: 0
};
export default (state = initialState, action) =>
{

    switch (action.type)
    {
        case 'POST_FETCH_START'     :
            return {
                ...state,
                fetching: true,
                fetchingMore: false,
                fetchingError: false,
                posts: [],
                requestId: state.requestId +1 ,
            };

        case 'POST_FETCH_MORE'      :
            return {
                ...state,
                fetching: false,
                fetchingMore: true,
                fetchingError: false ,
                requestId: state.requestId + 1
            };

        case 'POST_FETCH_COMPLETE'  :
            if (action.payload.requestId+1 !== state.requestId)
            {
                return {
                    ...state,
                    fetching: false,
                    fetchingMore: false,
                    fetchingError: false
                };
            }
            return {
                ...state,
                fetching: false,
                fetchingMore: false,
                fetchingError: false,
                posts: state.posts.concat(action.payload.result),
                requestId : state.requestId + 1
            };

        case 'POST_FETCH_FAIL'      :
            return {...state, fetching: false, fetchingMore: false, fetchingError: true};
    }

    return state;
}