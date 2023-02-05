import React from 'react';
import styled from 'styled-components'

const StyledGrid = styled.div`
  grid-auto-flow: dense;
  display: grid;
  position: relative;
  max-width: 80%;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(6, 400px);
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 80px;
  margin-top: 5vh;

  @media screen and (max-width: 1420px) {
    grid-template-columns: repeat(4, 246px);
    grid-template-rows: repeat(100, 246px);
  }

  @media screen and (max-width: 1320px) {
    grid-template-columns: repeat(4, 226px);
    grid-template-rows: repeat(100, 226px);
  }

  @media screen and (max-width: 1230px) {
    grid-template-columns: repeat(4, 216px);
    grid-template-rows: repeat(100, 216px);
  }

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(3, 246px);
    grid-template-rows: repeat(100, 246px);
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: repeat(3, 229px);
    grid-template-rows: repeat(100, 229px);
  }

  @media screen and (max-width: 929px) {
    grid-template-columns: repeat(3, 216px);
    grid-template-rows: repeat(100, 216px);
  }

  @media screen and (max-width: 879px) {
    grid-template-columns: repeat(2, 246px);
    grid-template-rows: repeat(100, 246px);
  }

  @media screen and (max-width: 799px) {
    grid-template-columns: repeat(2, 229px);
    grid-template-rows: repeat(100, 229px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(100, 200px);
  }

  @media screen and (max-width: 545px) {
    grid-template-columns: repeat(2, 168px);
    grid-template-rows: repeat(100, 168px);
  }

  @media screen and (max-width: 449px) {
    grid-template-columns: repeat(2, 148px);
    grid-template-rows: repeat(100, 148px);
  }
  
  @media screen and (max-width: 399px) {
    grid-template-columns: repeat(2, 138px);
    grid-template-rows: repeat(100, 138px);
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(2, 132px);
    grid-template-rows: repeat(100, 132px);
  }

  @media screen and (max-width: 359px) {
    grid-template-columns: repeat(2, 128px);
    grid-template-rows: repeat(100, 128px);
  }

  @media screen and (max-width: 349px) {
    grid-template-columns: repeat(2, 118px);
    grid-template-rows: repeat(100, 118px);
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, 100px);
    grid-template-rows: repeat(100, 100px);
  }
`

interface Props {
  children: React.ReactNode
}

const Grid = ({ children }: Props) => (
  <StyledGrid>
    {children}
  </StyledGrid>
)

export default Grid
