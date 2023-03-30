import React from 'react';
import styled, { withTheme } from 'styled-components'

const Card = styled.div`
  align-content: center;
  background-color: ${({ theme }) => theme.container};
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  min-height: 50vh;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`

const GridCard = ({ children }: { children: any, theme?: any }) => (
  <Card>
    {children}
  </Card>
)

export default withTheme(GridCard)