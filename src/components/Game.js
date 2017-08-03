import React from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';

import World from './entities/World';
import Snake from './entities/Snake';
import SnakeFood from './entities/SnakeFood';

import EventListener from './primitives/Listener';
import Loop from './primitives/Loop';
import Flex from './primitives/Flex';

import Config from '../config';
import GameLogic from '../logic/index';

export default class Game extends React.Component {
    state = Config.InitialState;

    render() {
        const { food, snake } = this.state;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Flex>
                        <Card>
                            <CardText>
                                <Loop tick={this.tick} delay={250}>
                                    <World config={Config.World}>
                                        <Snake head={snake.head} tail={snake.tail} />
                                        <SnakeFood position={food.position} />
                                    </World>
                                </Loop>
                                <p style={{fontSize: 17}}>
                                    Length: {this.state.snake.tailLength}
                                </p>
                            </CardText>
                        </Card>
                    </Flex>
                </MuiThemeProvider>
            </EventListener>
        );
    }

    tick = () =>
        this.setState(state => ({
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
