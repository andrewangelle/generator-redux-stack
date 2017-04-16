import React from 'react';
import renderer from 'react-test-renderer';
import <%= name %> from '../../src/containers/<%=name %>';

describe('<<%= name %> />', () => {
  it('should render', () => {
    const tree = renderer.create(
      <<%= name %> />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
