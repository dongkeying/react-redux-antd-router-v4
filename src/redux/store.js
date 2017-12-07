import { createStore, applyMiddleware} from 'redux';
import todoApp from './reducers';
import reduxLogger from 'redux-logger';

let store = createStore(todoApp,{},applyMiddleware(reduxLogger));
// let store = createStore(todoApp,{},中间件);

export default store;