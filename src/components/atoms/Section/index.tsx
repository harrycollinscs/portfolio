import React from 'react'
import styled, { withTheme } from 'styled-components'

const StyledSection = styled.section<{bgColor?: string, fullWidth?: boolean}>`
  min-height: 50vh;
  width: ${(props) => props.fullWidth ? '100vw' : '75vw' };
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 2;
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container };
  box-sizing: border-box;
  align-items: center;
  padding: 24px 0px;

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0;
  }
`

const Section = ({ children, bgColor, fullWidth = false }: { children?: React.ReactNode, bgColor?: string, fullWidth?: boolean, theme?: any }) => (
  <StyledSection bgColor={bgColor} fullWidth={fullWidth}>
    {children}
  </StyledSection>
)

export default withTheme(Section)