import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SnakeGame from './screen/SnakeGame/index';
import Splash from './screen/Splash/index';

export default () =>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <HashRouter>
            <Switch>
                <Route path="/" component={Splash} exact />
                <Route path="/game" component={SnakeGame} exact />
            </Switch>
        </HashRouter>
    </MuiThemeProvider>;
