import State from '../state';
import * as AppleActions from './actions';

export default (state = State.apple, action) => {
    switch (action.type) {
        case AppleActions.UPDATE_POSITION:
            return {
                ...state,
                position: action.payload.position
            };

        case AppleActions.SAVE_CURRENT_TIME:
            return {
                ...state,
                lastTime: action.payload.lastTime
            };

        default:
            return state;
    }
};
