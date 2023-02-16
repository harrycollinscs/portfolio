import React from 'react'
import renderer from 'react-test-renderer'
import Section from './index'

it('renders correctly', () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
});
