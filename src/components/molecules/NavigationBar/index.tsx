import React from 'react'
import styled, { withTheme }  from 'styled-components'
import { NavLink } from "react-router-dom";

const Container = styled.div`
  justify-content: center;
  position: sticky;
  top: 0px;
  display: flex;
  z-index: 1000;
  padding: 10px;
  box-shadow: 0rem 0.1rem 0.3rem rgba(0,0,0,0.1);
  background-color: ${({ theme }) => theme.container};
`

const ButtonsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const LinkCommonStyle = {
  display: 'inline-block',
  borderRadius: '8px',
  cursor: 'pointer',
  padding: '12px 20px',
  margin: '0px 0px',
  fontSize: '16px',
  letterSpacing: '0.5px',
  transition: 'all 0.5s ease',
  color: 'grey',
  textDecoration: 'none',
}

const LinkActiveStyle = {
  ...LinkCommonStyle,
  backgroundColor: '#ede0ff',
  color: '#6603fc',
  textAlign: 'center',
}

const LinkInactiveStyle = {
  ...LinkCommonStyle,
}


const tabs = [
  { to: `/`, title: 'All'},
  { to: `/resume`, title: 'Resume'},
  { to: `/about`, title: 'About'},
];


const NavigationBar = (props: { theme: any }) => (
  <Container>
    <nav>
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
    </nav>
  </Container>
)

export default withTheme(NavigationBar)