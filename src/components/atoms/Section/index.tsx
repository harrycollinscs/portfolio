import React from 'react'
import styled, { withTheme } from 'styled-components'

const StyledDiv = styled.div<{bgColor?: string}>`
  min-height: 25vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 2;
  padding: 24px;
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.container };
  margin: 16px;
  border-radius: 5px;
  box-sizing: border-box;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100vw;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0;
  }
`

const Section = ({ children, bgColor }: { children?: React.ReactNode, bgColor?: string, theme?: any }) => (
  <StyledDiv bgColor={bgColor}>
    {children}
  </StyledDiv>
)

export default withTheme(Section)