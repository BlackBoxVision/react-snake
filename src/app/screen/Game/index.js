import React from 'react';

import pure from 'recompose/pure';
import CardText from 'material-ui/Card/CardText';

import Layout from '../../common/Layout';

import Loop from './primitives/Loop';
import Stage from './primitives/Stage';
import EventListener from './primitives/EventListener';

import Snake from './entities/Snake';
import Apple from './entities/Apple';

import Config from '../../config';

class Game extends React.Component {
    render() {
        return (
            <Layout>
                <CardText>
                    <EventListener>
                        <Loop>
                            <Stage height={Config.World.height} width={Config.World.width} config={Config.World}>
                                <Snake />
                                <Apple />
                            </Stage>
                        </Loop>
                    </EventListener>
                </CardText>
            </Layout>
        );
    }
}

export default pure(Game);
