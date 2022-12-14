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

const StyledProductsList = styled.div`
    margin-top: 32px;

    @media screen and (max-width: 545px) {
      display: none;
    }
  `

const StyledTechList = styled.div`
  margin-top: 32px;

  @media screen and (max-width: 360px) {
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

const ResumeCard = ({ title, subtitle, subsubtitle, products = null, technologies = null, action, isTall = false }: any) => (
  <Card tall={isTall}>
    <Container>
    <ResumeItemHeader title={title} subtitle={subtitle} subsubtitle={subsubtitle} />
    {products && (
      <StyledProductsList>
        <strong>Products</strong>
        <div style={{ marginTop: '10px' }}>
          {products.map((product: any) => (
            <p style={{ margin: 0, marginTop: '5px' }}>{product}</p>
          ))}
        </div>
      </StyledProductsList>
    )}

    {technologies && (
      <StyledTechList style={{ marginTop: '32px' }}>
        <strong>Technologies</strong>
        <div style={{ marginTop: '10px' }}>
          {technologies.map((tech: any) => (
            <p style={{ margin: 0, marginTop: '5px' }}>{tech}</p>
          ))}
        </div>
     </StyledTechList>
    )}
    <ButtonContainer>
      {action && <StyledButton onClick={action}>More</StyledButton>}
    </ButtonContainer>
    </Container>
  </Card>
)

export default ResumeCard