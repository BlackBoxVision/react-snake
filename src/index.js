import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { whyDidYouUpdate } from 'why-did-you-update';

import App from './app/app';

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
