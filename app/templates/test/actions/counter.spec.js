import { spy } from 'sinon';
import * as actions from '../../src/actions/counter';

describe('Counter actions', () => {
  it('should create increment action', () => {
    expect(actions.increment()).toEqual({ type: actions.INCREMENT_COUNTER });
  });

  it('should create decrement action', () => {
    expect(actions.decrement()).toEqual({ type: actions.DECREMENT_COUNTER });
  });

  it('should create incrementAsync action', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    fn(dispatch);

    setTimeout(() => {
      expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).toEqual(true);
      done();
    }, 5);
  });
});
