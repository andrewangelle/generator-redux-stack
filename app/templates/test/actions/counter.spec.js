import { spy } from 'sinon';
import * as actions from '../../src/actions/counter';

describe('Counter actions', () => {
  it('should create increment action', () => {
    expect(actions.increment()).toEqual({ type: 'INCREMENT_COUNTER' });
  });

  it('should create decrement action', () => {
    expect(actions.decrement()).toEqual({ type: 'DECREMENT_COUNTER' });
  });

  it('should create incrementAsync action', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    fn(dispatch);

    setTimeout(() => {
      expect(dispatch.calledWith({ type: 'INCREMENT_COUNTER' })).toEqual(true);
      done();
    }, 5);
  });
});
