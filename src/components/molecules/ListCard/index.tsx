import React from 'react'
import Card from '../../atoms/Card'
import styled from 'styled-components'

const StyledList = styled.div<any>`
  text-align: center;
  height: 100%;

  h1 {
    color: ${(props) => props.titleColor};

    @media screen and (max-width: 450px) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;

    @media screen and (max-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      height: 100%;
      overflow: hidden;
    }
  }

  p { 
    padding: 0px;
    margin: 0px;
    color: white;

    @media screen and (max-width: 600px) {
      margin: 4px 8px;
      &::before {
        content: " ";
        white-space: pre;
      }
      &::after {
        content: " \n";
      }

      &:nth-last-child(1) {
        &::after {
          content: "";
        }
      }
    }
  }
`

const StyledTitle = styled.h1`
  @media screen and (max-width: 450px) {
    margin-top: 0;
  }
`

const List = ({ title, titleColor, list }: any) => (
  <StyledList titleColor={titleColor}>
    <StyledTitle>{title}</StyledTitle>
    <div>
      {list?.map((item: string) => (
        <p>{item}</p>
      ))}
    </div>
  </StyledList>
)

const ListCard = ({ title, listItems, bgColor, titleColor }: any) => (
  <Card tall bgColor={bgColor}>
    <List title={title} titleColor={titleColor} list={listItems}/> 
  </Card>
)

export default ListCard