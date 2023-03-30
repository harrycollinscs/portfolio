import React from 'react'
import renderer from 'react-test-renderer'
import GridCard from './index'

it('renders correctly', () => {
  const tree = renderer.create(<GridCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
