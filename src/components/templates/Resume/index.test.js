import React from 'react'
import renderer from 'react-test-renderer'
import Resume from './index'

it('renders correctly', () => {
  const tree = renderer.create(<Resume />).toJSON();
  expect(tree).toMatchSnapshot();
});
