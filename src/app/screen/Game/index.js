import React from 'react';

import Box from '../../common/primitives/Box';
import * as Responsive from '../../common/primitives/Responsive';

import GameView from './components/GameView';

export default class Game extends React.Component {
    render() {
        return (
            <Box>
                <Responsive.Desktop>
                    <GameView height="100vh" width="45.5vw" />
                </Responsive.Desktop>
                <Responsive.Tablet>
                    <GameView height="100vh" width="100vw" />
                </Responsive.Tablet>
                <Responsive.Mobile>
                    <GameView height="100vh" width="100vw" />
                </Responsive.Mobile>
            </Box>
        );
    }
}
