export default {
    World: {
        width: 625,
        height: 625,
        xBlocks: 25,
        yBlocks: 25,
        background: '#69F0AE'
    },
    Direction: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    },
    InitialState: {
        score: 0,
        snake: {
            head: {
                x: 0,
                y: 0
            },
            tail: [],
            tailLength: 0,
            direction: {
                x: 1,
                y: 0
            }
        },
        food: {
            position: {
                x: 10,
                y: 10
            }
        }
    }
};
