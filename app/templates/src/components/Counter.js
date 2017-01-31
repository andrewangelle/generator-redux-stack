import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/counter.scss';

@cssModules(styles)
export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { increment, incrementAsync, decrement, counter, styles } = this.props;

    return (
      <p>
        <span>Clicked: {counter} times</span>
        <button className={styles.button} onClick={increment}>+</button>
        <button className={styles.button} onClick={decrement}>-</button>
        <button className={styles.button} onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}
