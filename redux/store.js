import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = applyMiddleware(logger , thunk);

export default createStore(reducers , middleware);