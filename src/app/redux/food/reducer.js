import State from '../state';
import * as FoodActions from './actions';

export default (state = State.food, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
