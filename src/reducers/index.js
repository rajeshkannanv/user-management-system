import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import users from './users';
import drawer from './drawer';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore);
const reducer = combineReducers({
    users,
    drawer,
});
const store = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default store;
