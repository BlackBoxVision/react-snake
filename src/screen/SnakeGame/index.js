import React from 'react';

import pure from 'recompose/pure';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';

import World from './components/entities/World';
import Snake from './components/entities/Snake';
import SnakeFood from './components/entities/SnakeFood';

import EventListener from './components/primitives/Listener';
import Loop from './components/primitives/Loop';

import Config from '../../config';
import GameLogic from '../../logic/index';

import Flex from '../../components/Flex';
import Container from '../../components/Container';

class Game extends React.Component {
    state = Config.InitialState;

    render() {
        const { food, snake } = this.state;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <Container backgroundColor="#FFE082" height="100vh" width="100vw">
                    <Flex backgroundColor="transparent" height="100vh" width="100vw">
                        <Card>
                            <Container backgroundColor="#388E3C" height="100vh" width="45.5vw">
                                <CardText>
                                    <Loop tick={this.tick} delay={150}>
                                        <World config={Config.World}>
                                            <Snake head={snake.head} tail={snake.tail} />
                                            <SnakeFood position={food.position} />
                                        </World>
                                    </Loop>
                                    <p style={{ fontSize: 17, color: 'white' }}>
                                        Length: {this.state.snake.tailLength}
                                    </p>
                                </CardText>
                            </Container>
                        </Card>
                    </Flex>
                </Container>
            </EventListener>
        );
    }

    tick = () => this.setState(currentState => GameLogic.update(currentState));

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

export default pure(Game);
