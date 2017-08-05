import GameLogic from '../../logic';
import * as AppleActions from "../apple/actions";

export const UPDATE_POSITION = '@@snake/UPDATE_POSITION';
export const CHANGE_DIRECTION = '@@snake/CHANGE_DIRECTION';
export const SAVE_CURRENT_TIME = '@@snake/SAVE_CURRENT_TIME';
export const INCREASE_TAIL_LENGTH = '@@snake/INCREASE_TAIL_LENGTH';

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

export const increaseTailLength = newTailLength => ({
    type: INCREASE_TAIL_LENGTH,
    payload: {
        tailLength: newTailLength
    }
});

export const update = currentTime => {
    return (dispatch, getState) => {
        if (currentTime) {
            const { snake, apple } = getState();

            if (currentTime - snake.lastTime > 100) {
                const { head, tail } = GameLogic.updateSnake(snake);

                if (GameLogic.snakeEatsApple(snake, apple)) {
                    const {x, y} = GameLogic.updateApple(snake);
                    const length = snake.tailLength;

                    dispatch(updatePositionFrom(head, [head, ...tail]));
                    dispatch(increaseTailLength(length + 1));

                    dispatch(AppleActions.updatePosition(x, y));
                } else {
                    dispatch(updatePositionFrom(head, tail));
                }

                dispatch(saveCurrentTime(currentTime));
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
