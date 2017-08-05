import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import resetMiddleware from 'redux-reset';
import loggerMiddleware from 'redux-logger';

import appleReducer from './apple/reducer';
import gameReducer from './game/reducer';
import snakeReducer from './snake/reducer';

export default () => {
    const reducers = combineReducers({
        apple: appleReducer,
        game: gameReducer,
        snake: snakeReducer
    });

    if (process.env.NODE_ENV === 'development') {
        return createStore(reducers, compose(applyMiddleware(thunkMiddleware)), resetMiddleware());
    }

    return createStore(reducers, compose(applyMiddleware(thunkMiddleware)), resetMiddleware());
};
