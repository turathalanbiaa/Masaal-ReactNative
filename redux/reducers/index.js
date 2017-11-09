import {combineReducers} from 'redux';

import navReducer from './nav';

const appReducer = combineReducers({
    nav: navReducer,
});

export default appReducer;