import React from "react";
import styled, { css, withTheme } from "styled-components";

const Card = styled.div<{
  noPadding?: boolean;
  bgColor?: string;
  raisedCard?: boolean;
}>`
  align-content: center;
  text-align: center;
  background-color: ${({ theme, bgColor }) => (bgColor ? bgColor : theme.body)};
  line-height: 2;
  width: 100%;
  border-radius: 15px;
  padding: ${({ noPadding }) => (noPadding ? 0 : "40px 20px")};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  position: relative;
  border: 3px solid black;

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    right: 15px;
    top: 15px;
    bottom: -15px;
    z-index: -1;
    background: ${({ theme }) => theme.accent};
    border-radius: 15px;
    border: 3px solid black;
  }

  ${({ theme, raisedCard }) =>
    raisedCard &&
    css`
      border: 1px solid ${theme.accent};
      box-shadow: -1px 1px ${theme.accent}, -2px 2px ${theme.accent},
        -3px 3px ${theme.accent}, -4px 4px ${theme.accent},
        -5px 5px ${theme.accent};
    `}
`;

const GridCard = ({
  children,
  noPadding,
  bgColor,
  raisedCard = false,
}: {
  children: any;
  noPadding?: boolean;
  bgColor?: string;
  raisedCard?: boolean;
  theme?: any;
}) => (
  <Card noPadding={noPadding} bgColor={bgColor} raisedCard={raisedCard}>
    {children}
  </Card>
);

export default withTheme(GridCard);
