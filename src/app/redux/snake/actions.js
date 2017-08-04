export const MOVE_SNAKE_TO = "MOVE_SNAKE";
export const CHANGE_DIRECTION_TO = "CHANGE_DIRECTION";

export const moveSnake = (newHead, newTail, newLastTime) => ({
    type: MOVE_SNAKE_TO,
    payload: {
        head: newHead,
        tail: newTail,
        lastTime: newLastTime
    }
});

export const changeSnakeDirectionTo = (newX, newY) => ({
    type: CHANGE_DIRECTION_TO,
    payload: {
        direction: {
            x: newX,
            y: newY
        }
    }
});
