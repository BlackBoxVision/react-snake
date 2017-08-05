export const INCREASE_LENGTH = '@@game/INCREASE_LENGTH';
export const INCREASE_SCORE = '@@game/INCREASE_SCORE';
export const GAME_OVER = '@@game/GAME_OVER';

export const increaseLength = newLength => ({
    type: INCREASE_LENGTH,
    payload: {
        length: newLength
    }
});

export const increaseScore = newScore => ({
    type: INCREASE_LENGTH,
    payload: {
        score: newScore
    }
});

export const gameOver = newGameOver => ({
    type: GAME_OVER,
    payload: {
        gameOver: newGameOver
    }
});
