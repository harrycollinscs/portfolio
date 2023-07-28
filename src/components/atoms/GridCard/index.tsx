import React from 'react';
import styled, { css, withTheme } from 'styled-components'

const Card = styled.div<{ noPadding?: boolean, bgColor?: string, raisedCard?: boolean }>`
  align-content: center;
  background-color: ${({ theme, bgColor }) => bgColor ? bgColor : theme.card};
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  padding: ${({ noPadding }) => noPadding ? 0 : '24px' };
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ theme, raisedCard }) => (
    raisedCard && css`
      border: 1px solid ${ theme.accent };
      box-shadow:  
       -1px 1px ${ theme.accent },
       -2px 2px ${ theme.accent },
       -3px 3px ${ theme.accent },
       -4px 4px ${ theme.accent },
       -5px 5px ${ theme.accent };
    `
  )}
  
  @media screen and (max-width: 700px) {
    padding: 12px;
    border-radius: 0;
  }
`

const GridCard = ({ children, noPadding, bgColor, raisedCard = false }: { children: any, noPadding?: boolean, bgColor?: string, raisedCard?: boolean, theme?: any }) => (
  <Card noPadding={noPadding} bgColor={bgColor} raisedCard={raisedCard}>
    {children}
  </Card>
)

export default withTheme(GridCard)