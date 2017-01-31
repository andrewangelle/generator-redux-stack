import counter from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter';

describe('Counter reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {})).toEqual(0);
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counter(1, { type: INCREMENT_COUNTER })).toEqual(2);
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counter(1, { type: DECREMENT_COUNTER })).toEqual(0);
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).toEqual(1);
    });
  });
});
