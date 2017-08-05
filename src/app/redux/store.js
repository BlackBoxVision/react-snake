import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import resetMiddleware from 'redux-reset';
import loggerMiddleware from 'redux-logger';

import snakeReducer from './snake/reducer';
import foodReducer from './food/reducer';

export default () => {
    const reducers = combineReducers({
        snake: snakeReducer,
        food: foodReducer
    });

    if (process.env.NODE_ENV === 'development') {
        return createStore(reducers, compose(applyMiddleware(thunkMiddleware, loggerMiddleware)), resetMiddleware());
    }

    return createStore(reducers, compose(applyMiddleware(thunkMiddleware)), resetMiddleware());
};
