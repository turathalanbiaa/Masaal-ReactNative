import {combineReducers} from 'redux';

import navReducer from './nav';
import questionReducer from './questionReducer';
import sendQuestionReducer from "./sendQuestionReducer";
import postReducer from "./postReducer";

const appReducer = combineReducers({
    nav: navReducer,
    question : questionReducer,
    sendQuestionReducer : sendQuestionReducer,
    post : postReducer
});

export default appReducer;