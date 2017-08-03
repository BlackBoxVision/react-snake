import React from 'react';
import ReactDOM from 'react-dom';
import { whyDidYouUpdate } from 'why-did-you-update';

import App from './app';

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

ReactDOM.render(<App />, document.getElementById('root'));
