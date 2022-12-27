import React from 'react'
import Card from "../../atoms/Card";
import styled from 'styled-components'

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

const Container = styled.div<{action: boolean}>`
  width: 100%;
  margin-bottom: ${(props) => props.action ? '25' : '0'}px;
  position: relative;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
`

const ButtonContainer = styled.div`
  width: fill-available;
  box-sizing: border-box;
  
  @media screen and (mix-width: 601px) {
    width: auto;
    margin: 25px;
    right: 0;
  }
`

const StyledButton = styled.button`
  background-color: #ede0ff;
  color: #6603fc;
  border-radius: 12px;
  padding: 12px 16px;
  width: auto;
  border: none;
  font-weight: bold;
  width: 100%;
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
  width: -webkit-fill-available;

  padding: 25px;

  &:nth-child(1) {
    margin-top: 0px;
  }

 
`

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
`

const ResumeItemHeader = ({ title, subtitle, subsubtitle }: any) => (
  <StyledHeader style={{ width: '-webkit-fill-available'}}>
    <HeaderText>{title}</HeaderText>
    <Subtitle>{subtitle}</Subtitle>
    <Subsubtitle>{subsubtitle}</Subsubtitle>
  </StyledHeader>            
)

const ResumeCard = ({ title, subtitle, subsubtitle, lists = [], action, isTall = false }: any) => {
  const hasHeaderText = title || subtitle || subsubtitle;
  return (
    <Card tall={isTall}>
      <Container action={action}>
        { hasHeaderText && (
          <ResumeItemHeader title={title} subtitle={subtitle} subsubtitle={subsubtitle} />
        )}

        {
          lists.map((item: any, index: number) => (
            <List index={index}>
              <strong><h2 style={{ color: 'grey', marginTop: 0 }}>{item.title}</h2></strong>
              <ListItemsContainer>
                {item?.list?.map((product: any) => (
                  <ListItem style={{ margin: 0, marginTop: '5px' }}>{product}</ListItem>
                ))}
              </ListItemsContainer>
            </List>
          ))
        }      
      </Container>
      <ButtonContainer> 
        {action && <StyledButton onClick={action}>More</StyledButton>}
      </ButtonContainer>
    </Card>
  )
}

export default ResumeCard