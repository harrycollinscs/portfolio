import React from 'react'
import Card from "../../atoms/Card"
import styled from 'styled-components'

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;

h1 {
  color: ${(props) => props.color};
  font-size: 300%;

  @media screen and (max-width: 450px) {
    font-size: 250%;
  }
  @media screen and (max-width: 380px) {
    font-size: 200%;
  }
  @media screen and (max-width: 320px) {
    font-size: 150%;
  }
}
`

const TitleCard = ({ title, bgColor, color }: { title: string, bgColor: string, color: string }) => (
  <Card bgColor={bgColor} long>
    <Content color={color}>
      <h1>{title}</h1>
    </Content>
  </Card>
)

export default TitleCard