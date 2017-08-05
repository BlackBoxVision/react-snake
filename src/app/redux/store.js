import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import resetMiddleware from 'redux-reset';
import loggerMiddleware from 'redux-logger';

import snakeReducer from './snake/reducer';
import appleReducer from './apple/reducer';

export default () => {
    const reducers = combineReducers({
        snake: snakeReducer,
        apple: appleReducer
    });

    if (process.env.NODE_ENV === 'development') {
        return createStore(reducers, compose(applyMiddleware(thunkMiddleware)), resetMiddleware());
    }

    return createStore(reducers, compose(applyMiddleware(thunkMiddleware)), resetMiddleware());
};
