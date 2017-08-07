import { createSelector } from 'reselect';

const takeHead = state => state.snake.head;
const takeTail = state => state.snake.tail;

export const head = createSelector(takeHead, head => head);
export const tail = createSelector(takeTail, tail => tail);
