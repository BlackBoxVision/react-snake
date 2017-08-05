import State from '../state';
import * as GameActions from './actions';

export default (state = State.game, action) => {
    switch (action.type) {
        case GameActions.GAME_OVER:
            return {
                ...state,
                gameOver: action.payload.gameOver
            };

        case GameActions.INCREASE_LENGTH:
            return {
                ...state,
                length: action.payload.length
            };

        case GameActions.INCREASE_SCORE:
            return {
                ...state,
                score: action.payload.score
            };

        default:
            return state;
    }
};
