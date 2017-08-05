import { createSelector } from 'reselect';

const selector = state => state.snake;

export const snakeSelector = createSelector(selector, snake => snake);
