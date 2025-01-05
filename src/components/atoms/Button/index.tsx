import React from "react";
import styled, { withTheme } from "styled-components";

interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
  appearance?: "primary" | "secondary";
  theme: any;
}

const StyledButton = styled.button<{ appearance: string }>`
  background-color: ${({ theme, appearance }) =>
    theme.button[appearance].background};
  color: #000;
  padding: 15px 40px;
  border-radius: 15px;
  border: none;
  box-sizing: border-box;
  border: 3px solid black;
  
  @media screen and (max-width: 700px) {
    display: block;
    width: 100%;
  }

  p {
    font-size: 150%;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 0;
    width: 100%;
  }
`;

const Button = ({
  text,
  href,
  onClick,
  appearance = "primary",
  theme,
}: Props) => {
  const CTA = () => (
    <StyledButton appearance={appearance} onClick={onClick} type="button">
      <p>{text}</p>
    </StyledButton>
  );

  return href ? (
    <StyledAnchor href={href}>
      <CTA />
    </StyledAnchor>
  ) : (
    <CTA />
  );
};

export default withTheme(Button);
