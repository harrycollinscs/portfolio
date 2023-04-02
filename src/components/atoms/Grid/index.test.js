import React from 'react'
import renderer from 'react-test-renderer'
import Grid from './index'

it('renders correctly', () => {
  const tree = renderer.create(<Grid columns={{ desktop: 3, tablet: 3, smallTablet: 2, mobile: 1, smallMobile: 1 }}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
