import React from 'react';
import styled from 'styled-components'

const StyledGrid = styled.div<{columns: any}>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns.desktop}, 1fr);
  grid-gap: 20px;
  width: 90vw;
  box-sizing: border-box;
  min-height: auto;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(${({columns}) => columns.tablet}, 1fr);
  }

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(${({columns}) => columns.smallTablet}, 1fr);
  }

  @media screen and (max-width: 699px) {
    width: 100vw;
    grid-template-columns: repeat(${({columns}) => columns.desmobilektop}, 1fr);
  }

  @media screen and (max-width: 499px) {
    width: 100vw;
    grid-template-columns: repeat(${({columns}) => columns.smallMobile}, 1fr);
  }
`

interface Props {
  columns: {
    desktop: number
    tablet: number
    smallTablet: number
    mobile: number
    smallMobile: number
  }
  children: React.ReactNode
}

const Grid = ({ columns, children }: Props) => (
  <StyledGrid columns={columns}>
    {children}
  </StyledGrid>
)

export default Grid
