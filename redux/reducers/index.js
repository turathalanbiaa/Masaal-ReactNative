import {combineReducers} from 'redux';

import navReducer from './nav';
import questionReducer from './questionReducer';
import sendQuestionReducer from "./sendQuestionReducer";
import postReducer from "./postReducer";
import tagReducer from "./tagReducer";

const appReducer = combineReducers({
    nav: navReducer,
    question : questionReducer,
    sendQuestionReducer : sendQuestionReducer,
    post : postReducer ,
    tag : tagReducer
});

export default appReducer;