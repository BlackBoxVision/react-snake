import GrassSkin from './images/grass/skin0.jpg';

export default {
    World: {
        width: 625,
        height: 625,
        xBlocks: 25,
        yBlocks: 25,
        background: '#414141',
        image: `url(${GrassSkin})`,
        size: '25px 25px'
    },
    Direction: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    },
    InitialState: {
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
