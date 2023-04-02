import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../theme/Theme';
import Section from './index'

it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={lightTheme}>
      <Section />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
