import GameLogic from '../logic';

import * as AppleActions from '../apple/actions';
import * as GameActions from '../game/actions';

export const UPDATE_POSITION = '@@snake/UPDATE_POSITION';
export const CHANGE_DIRECTION = '@@snake/CHANGE_DIRECTION';
export const SAVE_CURRENT_TIME = '@@snake/SAVE_CURRENT_TIME';

const Direction = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

export const updatePositionFrom = (newHead, newTail) => ({
    type: UPDATE_POSITION,
    payload: {
        head: newHead,
        tail: newTail
    }
});

export const changeDirectionTo = (newX, newY) => ({
    type: CHANGE_DIRECTION,
    payload: {
        direction: {
            x: newX,
            y: newY
        }
    }
});

export const saveCurrentTime = newTime => ({
    type: SAVE_CURRENT_TIME,
    payload: {
        lastTime: newTime
    }
});

export const update = currentTime => {
    return (dispatch, getState) => {
        const { apple: { position }, game: { length, score }, snake: { head, tail, direction, lastTime } } = getState();

        if (currentTime) {
            if (currentTime - lastTime > 100) {
                const newSnake = GameLogic.updateSnake(head, tail, direction);

                if (!GameLogic.isHeadInTail(newSnake.head, newSnake.tail)) {
                    if (GameLogic.snakeEatsApple(head, position)) {
                        const newApplePosition = GameLogic.updateApple(head, tail);

                        dispatch(updatePositionFrom(newSnake.head, [newSnake.head, ...newSnake.tail]));

                        dispatch(GameActions.increaseLength(length + 1));
                        dispatch(GameActions.increaseScore(score + 1));

                        dispatch(AppleActions.updatePosition(newApplePosition.x, newApplePosition.y));
                    } else {
                        dispatch(updatePositionFrom(newSnake.head, newSnake.tail));
                    }

                    dispatch(saveCurrentTime(currentTime));
                } else {
                    dispatch(GameActions.gameOver(true));
                }
            }
        }
    };
};

export const handleKeyUp = char => {
    return (dispatch, getState) => {
        switch (char) {
            case Direction.UP:
            case Direction.DOWN:
                dispatch(changeDirectionTo(0, char === Direction.UP ? -1 : 1));
                break;

            case Direction.LEFT:
            case Direction.RIGHT:
                dispatch(changeDirectionTo(char === Direction.LEFT ? -1 : 1, 0));
                break;

            default:
                console.info('Unknown direction!');
                break;
        }
    };
};
