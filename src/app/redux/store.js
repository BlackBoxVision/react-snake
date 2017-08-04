import { createStore, combineReducers } from 'redux';

import snakeReducer from './snake/reducer';
import foodReducer from './food/reducer';

export default () => {
    return createStore(combineReducers({
        snake: snakeReducer,
        food: foodReducer
    }));
}