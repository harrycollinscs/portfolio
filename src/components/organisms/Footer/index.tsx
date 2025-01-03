import React from 'react'
import styled, { withTheme }  from 'styled-components'
import { NavLink } from "react-router-dom";
import Grid from '../../atoms/Grid';
import Section from '../../atoms/Section';

const StyledFooter = styled.footer`
  min-height: 50vh;
  background-color: black;
  color: white;
  z-index: 1000;
  display: flex;
  justify-content: center;

  div {
    padding: 20px 0px;
    box-sizing: border-box;
    justify-content: space-between;
    text-align: center;
    min-height: 50%;

    @media screen and (max-width: 1100px) {
      margin-bottom: 12px;

      figure:nth-child(1) {
        order: 3;
      }
      figure:nth-child(2) {
        order: 1;
      }
      figure:nth-child(3) {
        order: 2;
      }
    }
  }
`

const Links = () => {

  const LinksList = styled.ul`
    list-style-type: none;
    display: flex;  
    flex-direction: column;
    height: 100%;
    padding: 0;

  `

  const LinkCommonStyle = {
    display: 'inline-block',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '12px',
    letterSpacing: '0.5px',
    transition: 'all 0.5s ease',
    color: '#fff',
    textDecoration: 'none',
  }


  const tabs = [
    { to: `/`, title: 'All'},
    { to: `/resume`, title: 'Resume'},
    { to: `/about`, title: 'About'},
    { to: `/projects`, title: 'Projects'},
  ];

  const socialLinks = [
    { title: 'Email', to: 'mailto:harrycol97@gmail.com'},
    { title: 'LinkedIn', to: 'https://www.linkedin.com/in/harrycollinscs'},
    { title: 'Github', to: 'https://github.com/harrycollinscs'},
  ]

  const linkSections = [ { heading: 'EXPLORE', links: tabs},  { heading: 'CONTACT ME', links: socialLinks} ]

  return (
    <>
      <figure>
        <figcaption style={{ fontWeight: 'bold', color: 'grey' }}>HARRY COLLINS</figcaption>
        <small>© Harry Collins, 2025</small>
      </figure>

      {
        linkSections.map(({ heading, links }) => (
          <figure>
            <figcaption style={{ fontWeight: 'bold', color: 'grey' }}>{heading}</figcaption>
            <LinksList>
                {links.map(({to, title}, index) => (
                    <NavLink
                      key={title}
                      to={to}
                      style={LinkCommonStyle}
                    >
                      {title}
                    </NavLink>
                ))}
            </LinksList>
          </figure>
        ))
      }
    </>
  )
}

const Footer = (props: { theme: any }) => (
    <StyledFooter id='footer'>
      <Section bgColor='#000'>
        <Grid columns={{ desktop: 3, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}>
          <Links />
        </Grid>
      </Section>
    </StyledFooter>
)

export default withTheme(Footer)