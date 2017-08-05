import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import HashRouter from 'react-router-dom/HashRouter';
import Provider from 'react-redux/lib/components/Provider';

import { I18nextProvider } from 'react-i18next';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Game from './screen/Game';
import Splash from './screen/Splash';

import store from './redux/store';
import theme from './theme';
import i18n from './i18n';


export default () =>
    <MuiThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Splash} exact />
                        <Route path="/game" component={Game} exact />
                    </Switch>
                </HashRouter>
            </Provider>
        </I18nextProvider>
    </MuiThemeProvider>;
