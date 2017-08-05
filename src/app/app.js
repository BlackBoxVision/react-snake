import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import HashRouter from 'react-router-dom/HashRouter';
import Provider from 'react-redux/lib/components/Provider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import SnakeGame from './screen/Game/index';
import Splash from './screen/Splash/index';

import createStore from './redux/store';

export default () =>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={createStore()}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Splash} exact />
                    <Route path="/game" component={SnakeGame} exact />
                </Switch>
            </HashRouter>
        </Provider>
    </MuiThemeProvider>;
