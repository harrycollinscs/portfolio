import React from 'react'
import renderer from 'react-test-renderer'
import Grid from './index'

it('renders correctly', () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
});
