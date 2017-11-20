import {combineReducers} from 'redux';

import navReducer from './nav';
import questionReducer from './questionReducer';
import sendQuestionReducer from "./sendQuestionReducer";

const appReducer = combineReducers({
    nav: navReducer,
    question : questionReducer,
    sendQuestionReducer : sendQuestionReducer
});

export default appReducer;