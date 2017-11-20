let initialState = {
    sending : false ,
    complete : false ,
    success : false
};

export default (state = initialState , action) =>
{
    switch (action.type)
    {
        case 'SENDING_QUESTION_START':
            return {sending : true  , success : false , complete : false};
        case 'SENDING_QUESTION_DONE':
            return {sending : false  , success : true , complete : true};
        case 'SENDING_QUESTION_FAIL':
            return {sending : false  , success : false , complete : true};
    }

    return state;
}