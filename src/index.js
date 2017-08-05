import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/app';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
