import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();
const history = createHistory();

if (process.env.NODE_ENV === 'development') {
  const createDevToolsWindow = require('./utils/createDevToolsWindow').default;
  createDevToolsWindow(store);
}

render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
