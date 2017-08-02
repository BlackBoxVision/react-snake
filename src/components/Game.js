import React from 'react';

import World from './entities/World';
import Snake from './entities/Snake';
import SnakeFood from './entities/SnakeFood';

import EventListener from './primitives/Listener';
import Loop from './primitives/Loop';

import Config from '../utils/constants';

export default class Game extends React.Component {
    state = Config.InitialState;

    render() {
        const { food, snake } = this.state;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <Loop tick={this.tick} loopDelay={150}>
                    <World config={Config.World}>
                        <Snake head={snake.head} tail={snake.tail} />
                        <SnakeFood position={food.position} />
                    </World>
                </Loop>
            </EventListener>
        );
    }

    tick = _ => {
        this.setState(state => ({
            snake: {
                ...state.snake,
                head: this.calculateSnakePosition(state)
            }
        }));
    };

    handleKeyUp = event => {
        const char = event.which || event.keyCode;

        switch (char) {
            case Config.Direction.UP:
                this.changeDirectionTo(0, -1);
                break;

            case Config.Direction.DOWN:
                this.changeDirectionTo(0, 1);
                break;

            case Config.Direction.RIGHT:
                this.changeDirectionTo(1, 0);
                break;

            case Config.Direction.LEFT:
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

    calculateSnakePosition = state => {
        const X_BLOCKS = Config.World.xBlocks;
        const Y_BLOCKS = Config.World.yBlocks;

        let x = state.snake.head.x + state.snake.direction.x;
        let y = state.snake.head.y + state.snake.direction.y;

        x = x < 0 ? X_BLOCKS - 1 : x;
        x = x > X_BLOCKS - 1 ? 0 : x;

        y = y < 0 ? Y_BLOCKS - 1 : y;
        y = y > Y_BLOCKS - 1 ? 0 : y;

        return { x, y };
    };
}
