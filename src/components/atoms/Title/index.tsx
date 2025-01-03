import React from "react";
import styled, { css, withTheme } from "styled-components";

const StyledHeading = styled.h1<{ theme?: any; subtitle?: boolean }>`
  ${({ subtitle }) =>
    !subtitle &&
    css`
      font-family: "Lobster Two", serif;
      font-style: italic;
    `};

  ${({ subtitle }) =>
    subtitle &&
    css`
      text-decoration: underline solid ${({ theme }) => theme.accent};
    `};

  font-size: ${({ subtitle }) => (subtitle ? 30 : 60)}px;
  margin: 0px;
  padding: 0px;
  line-height: 1;

  @media screen and (max-width: 700px) {
    font-size: ${({ subtitle }) => (subtitle ? 30 : 38)}px;
  }
`;

const Title = ({
  text,
  subtitle = false,
  theme,
}: {
  text: string;
  subtitle?: boolean;
  theme: any;
}) => <StyledHeading subtitle={subtitle}>{text}</StyledHeading>;

export default withTheme(Title);
