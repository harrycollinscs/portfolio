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
  justify-content: flex-end;
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
  width: 40rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const NavigationLink = styled.li`
  display: inline-block;
  padding: 4px 20px;
  width: calc(100% / 3);
  text-align: center;

  a {
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: all 0.25s ease ;
    padding: 0px;
    border-radius: 20px;
  }

  .active {
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 15px;
    color: white;
    background-color: ${({ theme }) => theme.button.primary.background};
  }
`;

const NavigationBar = ({ theme }: { theme: any }) => {
  return (
    <Nav id="navigation-bar">
      <Container>
        <ButtonsList>
          {tabs.map(({ to, title }, index) => (
            <NavigationLink>
              <NavLink
                key={index}
                to={to}
                className={({ isActive, isPending }) => {
                  return isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "inactive";
                }}
                // style={({ isActive }) =>
                //   index === routeIndex ? { border: "1px solid red" } : {}
                // }
              >
                {title}
              </NavLink>
            </NavigationLink>
          ))}
        </ButtonsList>
      </Container>
    </Nav>
  );
};

export default withTheme(NavigationBar);
