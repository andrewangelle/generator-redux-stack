import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === 'development') {
  const createDevToolsWindow = require('./utils/createDevToolsWindow').default;
  createDevToolsWindow(store);
}

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
