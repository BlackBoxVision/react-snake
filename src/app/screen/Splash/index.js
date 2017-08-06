import React from 'react';

import Box from '../../common/primitives/Box';
import * as Responsive from '../../common/primitives/Responsive';

import SplashView from './components/SplashView';

export default class Splash extends React.Component {
    render() {
        return (
            <Box>
                <Responsive.Desktop>
                    <SplashView height="100vh" width="45.5vw" logo={{ width: '85%' }} />
                </Responsive.Desktop>
                <Responsive.Tablet>
                    <SplashView height="100vh" width="75.5vw" logo={{ width: '85%' }} />
                </Responsive.Tablet>
                <Responsive.Mobile>
                    <SplashView height="100vh" width="100vw" logo={{ width: '80%' }} />
                </Responsive.Mobile>
            </Box>
        );
    }
}
