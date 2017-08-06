import React from 'react';
import PropTypes from 'prop-types';

import Content from 'material-ui/Card/CardContent';

import Layout from '../../../common/primitives/Layout';

import Loop from '../components/primitives/Loop';
import Stage from '../components/primitives/Stage';

import Snake from '../components/entities/Snake';
import Apple from '../components/entities/Apple';

import GameOverDialog from '../components/GameOver';
import EventProvider from '../../../common/provider/Event';

import stage from '../../../utils/config';


export default class GameView extends React.Component {
    static propTypes = {
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired
    };

    render() {
        return (
            <EventProvider>
                <Layout height={this.props.height} width={this.props.width}>
                    <GameOverDialog />
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
        )
    }
}