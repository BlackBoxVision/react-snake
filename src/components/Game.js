import React from 'react';

import World from './entities/World';
import Snake from './entities/Snake';
import SnakeFood from './entities/SnakeFood';

import Constants from '../utils/constants';


export default class Game extends React.Component {
    state = {
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
                x: 0,
                y: 0
            }
        }
    };

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp);

        this.clearInterval = this.startLoop(this.tick);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp);

        this.clearInterval();
    }

    render() {
        const { food, snake } = this.state;

        return (
            <World
                width={Constants.World.WIDTH}
                height={Constants.World.HEIGHT}
                xBlocks={Constants.World.X_BLOCK}
                yBlocks={Constants.World.Y_BLOCK}
                backgroundColor={Constants.World.BACKGROUND_COLOR}
            >
                <SnakeFood position={food.position} />
                <Snake head={snake.head} tail={snake.tail} />
            </World>
        );
    }

    tick = () => {
        this.setState(state => ({
            snake: {
                ...state.snake,
                head: this.calculateSnakePosition(state)
            },
            food: {
                position: {
                    x: Math.floor(Math.random() * Constants.World.X_BLOCK),
                    y: Math.floor(Math.random() * Constants.World.Y_BLOCK)
                }
            }
        }));
    };

    startLoop = (updaterFunc, millis = 300) => {
        const intervalId = setInterval(updaterFunc, millis);

        return () => clearInterval(intervalId);
    };

    handleKeyUp = event => {
        const char = event.which || event.keyCode;

        switch (char) {
            case Constants.Direction.UP:
                this.changeDirectionTo(0, -1);
                break;

            case Constants.Direction.DOWN:
                this.changeDirectionTo(0, 1);
                break;

            case Constants.Direction.RIGHT:
                this.changeDirectionTo(1, 0);
                break;

            case Constants.Direction.LEFT:
                this.changeDirectionTo(-1, 0);
                break;

            default:
                console.info('Unknown direction!');
                break;
        }
    };

    changeDirectionTo = (x, y) =>
        this.setState(state => ({
            ...state,
            snake: {
                ...state.snake,
                direction: {
                    x: x,
                    y: y
                }
            }
        }));

    calculateSnakePosition = (state) => {
        let x = state.snake.head.x + state.snake.direction.x;
        let y = state.snake.head.y + state.snake.direction.y;

        x = x < 0 ? Constants.World.X_BLOCK - 1 : x;
        x = x > Constants.World.X_BLOCK - 1 ? 0 : x;

        y = y < 0 ? Constants.World.Y_BLOCK - 1 : y;
        y = y > Constants.World.Y_BLOCK - 1 ? 0 : y;

        return { x, y };
    }
}


