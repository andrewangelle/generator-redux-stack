import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../containers/App';
import DevTools from '../containers/DevTools';
import { ImportExportTool } from '../containers/DevTools';
import routes from '../config/routes.js';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <App>{routes}</App>

            {process.env.NODE_ENV === 'development' &&
              <div>
                <DevTools />
                <ImportExportTool />
              </div>
            }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
