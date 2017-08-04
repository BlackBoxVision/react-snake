import State from '../state';

export default (state = State.food, action) => {
    switch (action.type) {
        default:
            return state;
    }
}