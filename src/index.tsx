import React from 'react';
import ReactDOM from 'react-dom';

import MirageServer from './miragejs';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();

const { NODE_ENV: environment = 'development' } = process.env;
MirageServer.makeServer({ environment });
