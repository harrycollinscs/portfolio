import React from 'react';
import styled from 'styled-components'

const Container = styled.div<any>`
  width: 100%;
  height: 25vh;
  background-color: ${(props) => props.bgColor ? props.bgColor : '#2f295e'};
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 40px;
`

const Header = ({ title, bgColor }: { title: string; bgColor?: string }) => (
  <Container bgColor={bgColor}>
    <h1>{title}</h1>
  </Container>
)

export default Header
