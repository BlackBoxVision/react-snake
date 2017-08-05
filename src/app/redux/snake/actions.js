import GameLogic from '../../logic';
import Config from '../../config';

export const UPDATE_POSITION = '@@snake/UPDATE_POSITION';
export const CHANGE_DIRECTION = '@@snake/CHANGE_DIRECTION';
export const SAVE_CURRENT_TIME = '@@snake/SAVE_CURRENT_TIME';

const updatePositionFrom = (newHead, newTail) => ({
    type: UPDATE_POSITION,
    payload: {
        head: newHead,
        tail: newTail
    }
});

const changeDirectionTo = (newX, newY) => ({
    type: CHANGE_DIRECTION,
    payload: {
        direction: {
            x: newX,
            y: newY
        }
    }
});

const saveCurrentTime = newTime => ({
    type: SAVE_CURRENT_TIME,
    payload: {
        lastTime: newTime
    }
});

export const update = currentTime => {
    return (dispatch, getState) => {
        if (currentTime) {
            const { snake, food } = getState();

            if (currentTime - snake.lastTime > 100) {
                const { head, tail } = GameLogic.updateSnake(snake);

                dispatch(updatePositionFrom(head, tail));
                dispatch(saveCurrentTime(currentTime));
            }
        }
    };
};

export const handleKeyUp = char => {
    return (dispatch, getState) => {
        switch (char) {
            case Config.Direction.UP:
            case Config.Direction.DOWN:
                const y = char === Config.Direction.UP ? -1 : 1;
                dispatch(changeDirectionTo(0, y));
                break;

            case Config.Direction.LEFT:
            case Config.Direction.RIGHT:
                const x = char === Config.Direction.LEFT ? -1 : 1;
                dispatch(changeDirectionTo(x, 0));
                break;

            default:
                console.info('Unknown direction!');
                break;
        }
    }
}