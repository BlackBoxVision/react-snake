import { createSelector } from 'reselect';

const takeGameOver = state => state.game.gameOver;

export const gameOverSelector = createSelector(takeGameOver, gameOver => gameOver);
