import { createSelector } from 'reselect';

const takePosition = state => state.apple.position;

export const position = createSelector(takePosition, position => position);
