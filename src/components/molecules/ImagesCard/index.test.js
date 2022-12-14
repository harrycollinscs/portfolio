import React from 'react'
import renderer from 'react-test-renderer'
import ImagesCard from './index'

it('renders correctly', () => {
  const tree = renderer.create(<ImagesCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
