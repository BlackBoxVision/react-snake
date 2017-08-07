import { createSelector } from 'reselect';

const takeGameOver = state => state.game.gameOver;
const takeScore = state => state.game.score;

export const gameOver = createSelector(takeGameOver, gameOver => gameOver);
export const score = createSelector(takeScore, score => score);
