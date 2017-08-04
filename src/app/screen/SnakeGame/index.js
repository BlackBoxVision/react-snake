import React from 'react';

import pure from 'recompose/pure';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';

import Stage from './components/entities/World';
import Snake from './components/entities/Snake';
import SnakeFood from './components/entities/SnakeFood';

import EventListener from './components/primitives/Listener';
import Loop from './components/primitives/Loop';

import Config from '../../config';
import GameLogic from '../../logic/index';

import Flex from '../../components/Flex';
import Container from '../../components/Container';
import GameOverDialog from '../../components/GameOverDialog';

class Game extends React.Component {
    state = Config.InitialState;

    render() {
        const { food, snake, gameOver } = this.state;

        return (
            <EventListener name="keyup" handler={this.handleKeyUp}>
                <Container backgroundColor="#FFE082" height="100vh" width="100vw">
                    <Flex backgroundColor="transparent" height="100vh" width="100vw">
                        <GameOverDialog onRestart={this.restart} open={gameOver} />
                        <Card>
                            <Container backgroundColor="#388E3C" height="100vh" width="45.5vw">
                                <CardText>
                                    <Loop>
                                        <Stage config={Config.World}>
                                            <Snake />
                                            <SnakeFood />
                                        </Stage>
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
}

export default pure(Game);
