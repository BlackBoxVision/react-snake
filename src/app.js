import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SnakeGame from './screen/SnakeGame';
import Splash from './screen/Splash';

export default () =>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Splash} exact />
                <Route path="/game" component={SnakeGame} exact />
            </div>
        </BrowserRouter>
    </MuiThemeProvider>;
