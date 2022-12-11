import Card from "../../atoms/Card"
import styled from 'styled-components'

const TitleCard = ({ title, bgColor, color }: { title: string, bgColor: string, color: string }) => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
      color: ${color};
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

  return (
    <Card bgColor={bgColor} long>
      <Content>
        <h1>{title}</h1>
      </Content>
    </Card>
  )
}

export default TitleCard