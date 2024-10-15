import React from 'react';
import styled from 'styled-components'

const StyledGrid = styled.div<{columns: any}>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns.desktop}, 1fr);
  grid-gap: 40px;
  width: 100%;
  box-sizing: border-box;
  min-height: auto;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(${({columns}) => columns.tablet}, 1fr);
  }

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(${({columns}) => columns.smallTablet}, 1fr);
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(${({columns}) => columns.mobile}, 1fr);
  }

  @media screen and (max-width: 699px) {
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