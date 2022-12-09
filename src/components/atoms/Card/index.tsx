import React from 'react';
import styled, { css } from 'styled-components'

interface Props {
  long?: boolean
  tall?: boolean
  circle?: boolean
  bgColor?: string
  bgImage?: any
  noPadding?: boolean
  children?: React.ReactNode
  action?: () => void
}

const StyledCard = styled.div<any>`
  position: relative;
  border-radius: ${( props ) => props.circle ? '50%' : '25px'};
  background-color: ${( props ) => props.bgColor ? props.bgColor : 'white'};
  ${(props) => props.bgImage && css`
    background-image: url(${props.bgImage}) !important;
    background-repeat: no-repeat;
    background-size: 100%;
  `}
  box-shadow: 0.2rem 0.2rem 1rem rgb(0 0 0 / 5%);
  padding: ${( props ) => props.noPadding ? '0': '24'}px;

  @media (max-width: 600px) {
    grid-column: span 2;
    grid-row: span 2;
    box-shadow: none;
  }

  ${(props) => props.long && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    grid-row: auto;
  `}

  ${(props) => props.tall && css`
    display: flex;
    flex-direction: column;
    grid-column: auto;
    grid-row: span 2;
  `}
`

const Card = ({ bgColor, bgImage, noPadding, circle = false, long, tall, action, children }: Props) => (
    <StyledCard bgColor={bgColor} bgImage={bgImage} noPadding={noPadding} circle={circle} long={long} tall={tall} onClick={action}>
        {children}
    </StyledCard>
  )


export default Card
