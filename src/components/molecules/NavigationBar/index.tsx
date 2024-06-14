import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const tabs = [
  { to: `/`, title: "Home" },
  { to: `/projects`, title: "Projects" },
  { to: `/about`, title: "Personal" },
];

const Nav = styled.nav`
  top: 0px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.body};
  height: 60px;
`;

const Container = styled.div`
  align-items: center;
`;

const ButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 4px 20px;
  width: calc(100% / 3);
  text-align: center;
`;

const Indicator = styled.div<{ index: number; theme: any }>`
  position: relative;
  height: 2px;
  width: calc(100% / 3);
  left: ${({ index }) => `calc(100% / 3 * ${index})`};
  background-color: ${({ theme }) => theme.primary};
  transition: 0.1s linear;
`;

const NavigationBar = ({ theme }: { theme: any }) => {
  const pathname = window.location.pathname;
  const routeIndex = tabs.findIndex((item) => pathname === item.to);
  const [navIndex, setNavIndex] = useState(routeIndex > 0 ? routeIndex : 0);

  return (
    <Nav id="navigation-bar">
      <Container>
        <ButtonsList>
          {tabs.map(({ to, title }, index) => (
            <NavigationLink
              key={index}
              to={to}
              onClick={(e) => {
                setNavIndex(index);
              }}
              style={({ isActive }) =>
                isActive ? { border: "1px solid red" } : {}
              }
            >
              {title}
            </NavigationLink>
          ))}
        </ButtonsList>
        <Indicator index={navIndex} />
      </Container>
    </Nav>
  );
};

export default withTheme(NavigationBar);
