import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';
import createDevToolsWindow from './utils/createDevToolsWindow';
import Root from './containers/Root';

const store = configureStore();
const history = createHistory();

if (process.env.NODE_ENV === 'development') {
  createDevToolsWindow(store);
}

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
