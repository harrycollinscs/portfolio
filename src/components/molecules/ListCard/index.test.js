import React from 'react'
import renderer from 'react-test-renderer'
import ListCard from './index'

it('renders correctly', () => {
  const tree = renderer.create(<ListCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
