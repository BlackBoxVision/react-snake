import React from 'react';

import World from './entities/World';
import Snake from './entities/Snake';
import SnakeFood from './entities/SnakeFood';

import EventListener from './primitives/Listener';
import Loop from './primitives/Loop';

import Config from '../config';
import GameLogic from "../logic/index";

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

    tick = () => {
        this.setState(GameLogic.updateFood);
        this.setState(GameLogic.updateSnake);
    };

    handleKeyUp = event => {
        const char = event.which || event.keyCode;
        let updater = null;

        switch (char) {
            case Config.Direction.UP:
                updater = this.changeDirectionTo(0, -1);
                break;

            case Config.Direction.DOWN:
                updater = this.changeDirectionTo(0, 1);
                break;

            case Config.Direction.RIGHT:
                updater = this.changeDirectionTo(1, 0);
                break;

            case Config.Direction.LEFT:
                updater = this.changeDirectionTo(-1, 0);
                break;

            default:
                console.info('Unknown direction!');
                break;
        }

        if (updater !== null) {
            this.setState(updater);
        }
    };

    changeDirectionTo = (x, y) => (state) => ({
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
