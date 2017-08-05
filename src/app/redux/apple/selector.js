import { createSelector } from 'reselect';

const takePosition = state => state.apple.position;

export const positionSelector = createSelector(takePosition, position => position);
