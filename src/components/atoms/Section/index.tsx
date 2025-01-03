import React from 'react'
import styled, { withTheme } from 'styled-components'

const StyledSection = styled.section<{bgColor?: string, fullWidth?: boolean, column?: boolean}>`
  width: ${(props) => props.fullWidth ? '100vw' : '65vw' };
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row' };
  justify-content: ${(props) => props.column ? 'flex-start' : 'center' };
  line-height: 2;
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container };
  box-sizing: border-box;
  align-items: center;
  padding: 60px 0px;

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0;
  }
`

const Section = ({ children, bgColor, fullWidth = false, column = false }: { children?: React.ReactNode, bgColor?: string, fullWidth?: boolean, column?: boolean, theme?: any }) => (
  <StyledSection bgColor={bgColor} fullWidth={fullWidth} column={column}>
    {children}
  </StyledSection>
)

export default withTheme(Section)