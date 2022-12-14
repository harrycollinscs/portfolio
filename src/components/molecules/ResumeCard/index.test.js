import React from 'react'
import renderer from 'react-test-renderer'
import ResumeCard from './index'

it('renders correctly', () => {
  const tree = renderer.create(<ResumeCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
