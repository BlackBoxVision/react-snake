export default {
    game: {
        length: 0,
        score: 0,
        gameOver: false
    },
    snake: {
        lastTime: 0,
        head: {
            x: 0,
            y: 0
        },
        tail: [],
        direction: {
            x: 1,
            y: 0
        }
    },
    apple: {
        lastTime: 0,
        position: {
            x: 10,
            y: 10
        }
    }
};
