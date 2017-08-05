import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import HashRouter from 'react-router-dom/HashRouter';
import Provider from 'react-redux/lib/components/Provider';

import createMuiTheme from 'material-ui/styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Game from './screen/Game';
import Splash from './screen/Splash';

import createStore from './redux/store';

export default () =>
    <MuiThemeProvider theme={createMuiTheme()}>
        <Provider store={createStore()}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Splash} exact />
                    <Route path="/game" component={Game} exact />
                </Switch>
            </HashRouter>
        </Provider>
    </MuiThemeProvider>;
