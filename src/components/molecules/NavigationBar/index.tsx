import React from 'react'
import styled, { withTheme }  from 'styled-components'
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  top: 0px;
  z-index: 1000;
  display: flex;
  justify-content: center;

  div {
    padding: 20px 0px;
    box-sizing: border-box;
    justify-content: space-between;
    text-align: center;
    width: 75%;
    display: flex;
  }
`

const Title = styled.h2`
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Container = styled.div`
  align-items: center;
`

const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;  
  width: 50%;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const LinkCommonStyle = {
  display: 'inline-block',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  letterSpacing: '0.5px',
  transition: 'all 0.5s ease',
  color: '#000',
  textDecoration: 'none',
}

const LinkActiveStyle = {
  ...LinkCommonStyle,
  fontWeight: 'bold',
}

const LinkInactiveStyle = {
  ...LinkCommonStyle,
}


const tabs = [
  { to: `/`, title: 'All'},
  { to: `/resume`, title: 'Resume'},
  { to: `/about`, title: 'About'},
  { to: `/projects`, title: 'Projects'},
];


const NavigationBar = (props: { theme: any }) => (
    <Nav id='navigation-bar'>
      <Container>
        <Title>HARRY COLLINS</Title>
        <ButtonsList>
          {tabs.map(({to, title}, index) => (
              <NavLink
                key={index}
                to={to}
                style={({ isActive }) => isActive ? LinkActiveStyle : LinkInactiveStyle}
              >
                {title}
              </NavLink>
          ))}
        </ButtonsList>
      </Container>
    </Nav>
)

export default withTheme(NavigationBar)