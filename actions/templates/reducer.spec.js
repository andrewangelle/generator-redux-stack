import <%= name %> from '../../src/reducers/<%= name %>';
import { placeholder } from '../../src/actions/<%= name %>';

describe('<%= name %> reducers', () => {
  it('should handle initial state', () => {
    expect(<%= name %>(undefined, {})).toEqual(null);
  });

  it('should handle placeholder', () => {
    expect(<%= name %>(undefined, { type: placeholder })).toEqual(null);
  });
});
