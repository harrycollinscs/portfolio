import React from 'react'
import Card from "../../atoms/Card";
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #ede0ff;
  color: #6603fc;
  border-radius: 12px;
  padding: 12px 16px;
  width: auto;
  border: none;
  font-weight: bold;
`

const HeaderText = styled.h2`
  margin-top: 0;
`

const Subtitle = styled.p`
  margin: 0;
`

const Subsubtitle = styled.small`
  font-style: italic;
  color: grey;
`

const Container = styled.div`
  width: 100%;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`

const ListItemsContainer = styled.div`
  margin-top: 10px;
`

const ListItem = styled.p`
  margin: 0;
  margin-top: 5px;
`

const List = styled.div<{index: number}>`
  margin-top: 24px;
  background-color: #eee;
  border-radius: 25px;
  text-align: center;

  padding: 10px;

  @media screen and (max-width: ${(props) => props.index ? '545' : '360'}px) {
    display: none;
  }
`

const ResumeItemHeader = ({ title, subtitle, subsubtitle }: any) => (
  <>
    <HeaderText>{title}</HeaderText>
    <Subtitle>{subtitle}</Subtitle>
    <Subsubtitle>{subsubtitle}</Subsubtitle>
  </>            
)

const ResumeCard = ({ title, subtitle, subsubtitle, lists = [], action, isTall = false }: any) => (
  <Card tall={isTall}>
    <Container>
      { (title || subtitle || subsubtitle) && (
        <ResumeItemHeader title={title} subtitle={subtitle} subsubtitle={subsubtitle} />
      )}

    {
      lists.map((item: any, index: number) => (
        <List index={index}>
          {/* <div style={{ margin: 10, marginTop: 100 }}> */}
          <strong><h2 style={{ color: 'grey', marginTop: 0 }}>{item.title}</h2></strong>
          <ListItemsContainer>
            {item?.list?.map((product: any) => (
              <ListItem style={{ margin: 0, marginTop: '5px' }}>{product}</ListItem>
            ))}
          </ListItemsContainer>
          {/* </div> */}
        </List>
      ))
    }

    <ButtonContainer>
      {action && <StyledButton onClick={action}>More</StyledButton>}
    </ButtonContainer>
    </Container>
  </Card>
)

export default ResumeCard