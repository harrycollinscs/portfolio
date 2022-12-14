import React from 'react'
import renderer from 'react-test-renderer'
import TitleCard from './index'

it('renders correctly', () => {
  const tree = renderer.create(<TitleCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
