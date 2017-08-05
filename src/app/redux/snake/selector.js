import { createSelector } from 'reselect';

const takeHead = state => state.snake.head;
const takeTail = state => state.snake.tail;

export const headSelector = createSelector(takeHead, head => head);
export const tailSelector = createSelector(takeTail, tail => tail);