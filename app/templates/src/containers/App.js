import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import cssModules from 'react-css-modules';
import Header from '../components/Header';
import routes from '../config/routes.js';
import styles from '../style/index.scss';

@cssModules(styles)
export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { store, history, styles } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={styles.container}>
            <Header />

            {routes}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
