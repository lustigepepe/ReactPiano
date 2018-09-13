import React from 'react';
import ReactDOM from 'react-dom';
import PianoApp from './PianoApp';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import './index.css';




ReactDOM.render(<PianoApp />, document.getElementById('root'));
registerServiceWorker();
