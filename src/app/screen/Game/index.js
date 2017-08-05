import React from 'react';

import Content from 'material-ui/Card/CardContent';

import Layout from '../../common/Layout';

import Loop from './primitives/Loop';
import Stage from './primitives/Stage';

import Snake from './entities/Snake';
import Apple from './entities/Apple';

import GameOver from '../../common/GameOver';
import EventProvider from '../../common/EventProvider';

import stage from '../../utils/config';

export default class Game extends React.Component {
    render() {
        return (
            <EventProvider>
                <Layout>
                    <GameOver />
                    <Content>
                        <Loop>
                            <Stage height={stage.height} width={stage.width} config={stage}>
                                <Snake />
                                <Apple />
                            </Stage>
                        </Loop>
                    </Content>
                </Layout>
            </EventProvider>
        );
    }
}
