import React from 'react';

import pure from 'recompose/pure';
import Content from 'material-ui/Card/CardContent';

import Layout from '../../common/Layout';

import Loop from './primitives/Loop';
import Stage from './primitives/Stage';

import Snake from './entities/Snake';
import Apple from './entities/Apple';

import stage from '../../utils/config';
import EventProvider from '../../common/EventProvider';

class Game extends React.PureComponent {
    render() {
        return (
            <EventProvider>
                <Layout>
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

export default pure(Game);
