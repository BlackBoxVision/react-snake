import { createSelector } from 'reselect';

const takeGameOver = state => state.game.gameOver;
const takeScore = state => state.game.score;

export const gameOverSelector = createSelector(takeGameOver, gameOver => gameOver);
export const scoreSelector = createSelector(takeScore, score => score);
