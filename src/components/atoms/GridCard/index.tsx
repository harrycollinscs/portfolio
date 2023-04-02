import React from 'react';
import styled, { withTheme } from 'styled-components'

const Card = styled.div<{ noPadding?: boolean }>`
  align-content: center;
  background-color: ${({ theme }) => theme.container};
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  padding: ${({ noPadding }) => noPadding ? 0 : '24px' };
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    padding: 12px;
    border-radius: 0;
  }
`

const GridCard = ({ children, noPadding }: { children: any, noPadding?: boolean, theme?: any }) => (
  <Card noPadding={noPadding}>
    {children}
  </Card>
)

export default withTheme(GridCard)