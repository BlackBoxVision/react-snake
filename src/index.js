import React from 'react';
import ReactDOM from 'react-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Card from 'material-ui/Card/Card';

import SnakeGame from './components/Game';
import Flex from './components/primitives/Flex';

const App = _ =>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Flex>
            <Card>
                <SnakeGame />
            </Card>
        </Flex>
    </MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById('root'));
