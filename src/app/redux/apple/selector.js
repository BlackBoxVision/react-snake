import { createSelector } from 'reselect';

const selector = state => state.apple;

export const appleSelector = createSelector(selector, apple => apple);
