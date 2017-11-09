import {combineReducers} from 'redux';

import navReducer from './nav';
import questionReducer from './questionReducer';

const appReducer = combineReducers({
    nav: navReducer,
    question : questionReducer,
});

export default appReducer;