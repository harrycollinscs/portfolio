import React from 'react'
import renderer from 'react-test-renderer'
import All from './index'

it('renders correctly', () => {
  const tree = renderer.create(<All />).toJSON();
  expect(tree).toMatchSnapshot();
});
