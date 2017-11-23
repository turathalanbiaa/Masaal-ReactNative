const initialState = {
    fetching: false,
    tags: [],
    fetchingError: false,
    requestId : 0
};

export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'FETCH_TAG_START':
            return {...state , fetching: true, tags: [], fetchingError: false};
        case 'FETCH_TAG_DONE' :
            return {...state , fetching: false, tags: action.payload.tags, fetchingError: false , requestId : action.payload.requestId};
        case 'FETCH_TAG_FAIL' :
            return {...state , fetching: false, tags: [], fetchingError: true};
    }

    return state;
}