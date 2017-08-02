import React from 'react';

import World from './entities/World';
import Snake from './entities/Snake';
import SnakeFood from './entities/SnakeFood';

import EventListener from './primitives/Listener';
import Loop from './primitives/Loop';

import Config from '../config';
import GameLogic from '../logic/index';

export default class Game extends React.Component {
    state = Config.InitialState;

    render() {
        const { food, snake } = this.state;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <Loop tick={this.tick} delay={400}>
                    <World config={Config.World}>
                        <Snake head={snake.head} tail={snake.tail} />
                        <SnakeFood position={food.position} />
                    </World>
                </Loop>
            </EventListener>
        );
    }

    tick = () => this.setState(state => ({
        ...GameLogic.updateFood(state),
        ...GameLogic.updateSnake(state)
    }));


    handleKeyUp = event => {
        const char = event.which || event.keyCode;
        let updater = null;

        switch (char) {
            case Config.Direction.UP:
            case Config.Direction.DOWN:
                const y = char === Config.Direction.UP ? -1 : 1;
                updater = this.changeDirectionTo(0, y);
                break;

            case Config.Direction.LEFT:
            case Config.Direction.RIGHT:
                const x = char === Config.Direction.LEFT ? -1 : 1;
                updater = this.changeDirectionTo(x, 0);
                break;

            default:
                console.info('Unknown direction!');
                break;
        }

        if (updater !== null) {
            this.setState(updater);
        }
    };

    changeDirectionTo = (x, y) => state => ({
        ...state,
        snake: {
            ...state.snake,
            direction: {
                x: x,
                y: y
            }
        }
    });
}
