import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  min-height: 25vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 2;
  padding: 24px;
  background-color: white;
  margin: 16px;
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100vw;
    margin-left: 0px;
    margin-right: 0px;
  }
`

const Section = ({ children }: { children?: React.ReactNode }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
)

export default Section