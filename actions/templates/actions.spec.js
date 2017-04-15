import { spy } from 'sinon';
import { placeholder } from '../../src/actions/<%= name %>';

describe('<%= name %> actions', () => {
  it('should create placeholder action', () => {
    expect(placeholder()).toEqual({ type: placeholder.toString() });
  });
});
