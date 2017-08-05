import State from '../state';
import * as SnakeActions from './actions';

export default (state = State.snake, action) => {
    switch (action.type) {
        case SnakeActions.CHANGE_DIRECTION:
            return {
                ...state,
                direction: action.payload.direction
            };

        case SnakeActions.UPDATE_POSITION:
            return {
                ...state,
                head: action.payload.head,
                tail: action.payload.tail
            };

        case SnakeActions.SAVE_CURRENT_TIME:
            return {
                ...state,
                lastTime: action.payload.lastTime
            };

        default:
            return state;
    }
};
