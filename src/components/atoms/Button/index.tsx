import React from 'react'
import styled, { withTheme } from 'styled-components'

interface Props {
  text: string
  href?: string
  onClick?: () => void
  appearance?: 'primary' | 'secondary'
  theme: any
}

const StyledButton = styled.button<{ appearance: string }>`
  background-color: ${({ theme, appearance }) => theme.button[appearance].background};
  color: ${({ theme, appearance }) => theme.button[appearance].text};
  padding: 15px 30px;
  border-radius: 30px;
  border: none;
  box-sizing: border-box;

  p {
    font-size: 150%;
  }
`

const Button = ({ text, href, onClick, appearance = 'primary', theme }: Props) => {
  const CTA = () => (
    <StyledButton appearance={appearance} onClick={onClick} type='button'>
      <p>{text}</p>
    </StyledButton>
  )

  return href ? <a href={href}><CTA/></a> : <CTA />
}

export default withTheme(Button)