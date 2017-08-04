import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SnakeGame from './screen/SnakeGame/index';
import Splash from './screen/Splash/index';

import store from './redux/store';

export default () =>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store()}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Splash} exact />
                    <Route path="/game" component={SnakeGame} exact />
                </Switch>
            </HashRouter>
        </Provider>
    </MuiThemeProvider>;
