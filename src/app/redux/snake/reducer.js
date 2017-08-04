import State from '../state';

export default (state = State.snake, action) => {
    switch (action.type) {
        case "CHANGE_DIRECTION":
            return {
                ...state,
                direction: action.payload.direction
            };
        case "MOVE_SNAKE":
            return {
                ...state,
                head: action.payload.head,
                tail: action.payload.tail,
                lastTime: action.payload.lastTime
            };
        default:
            return state;
    }
}