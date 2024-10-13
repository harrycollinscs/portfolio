import React, { useEffect, useState } from "react";
import Page from "../../atoms/Page";

import styled, { css, withTheme } from "styled-components";

import Manteca from "../../../assets/images/HarryManteca.jpg";
import Section from "../../atoms/Section";
import GridCard from "../../atoms/GridCard";
import Grid from "../../atoms/Grid";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const Tiles = [
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Software Engineer</h2>
    <p style={{ marginTop: 48 }}>
      I've been a Software Engineer for over 3 years
      <br />
      <br />I have a primary focus on front end development; though I prefer to
      think of myself as Full Stack.
    </p>
  </GridCard>,
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Team Player</h2>
    <p style={{ marginTop: 48 }}>
      A team is only as good as how they feel.
      <br />
      <br />
      Morale, team work, and psychological safety come first.
      <br />
      <br />
      Something great can be the by-product of having fun with it.
    </p>
  </GridCard>,
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Forward Thinker</h2>
    <p style={{ marginTop: 48 }}>
      What we do today can make or break tomorrow.
      <br />
      <br />
      I believe in taking take to plan ahead and think about the long-term
      impact of our choices.
      <br />
      <br />
      Creating something good isn't easy.
    </p>
  </GridCard>,
];

const IntroArticle = styled.article<{ isMounted?: boolean }>`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: start;
  padding: 40px;
  padding-bottom: 0px;
  /* border-top: 3px solid #2e425d; */
  /* border-left: 3px solid #2e425d; */
  position: relative;

  &::before {
    transition: 1s ease-out;
    content: "";
    position: absolute;
    height: 0px;
    width: 3px;
    bottom: 0px;
    left: 0px;
    background-color: #0050ff;
  }

  &::after {
    transition: 1s ease-in;
    transition-delay: 1s;
    content: "";
    position: absolute;
    height: 3px;
    width: 0px;
    top: 0px;
    left: 0px;
    background-color: #0050ff;
  }

  ${({ isMounted }) =>
    isMounted &&
    css`
      &::before {
        height: 100%;
      }

      &::after {
        width: 100%;
      }
    `}

  @media screen and (max-width: 700px) {
    a {
      align-self: center;
    }
    order: 2;
  }
`;

const ImageArticle = styled.article<{ isMounted?: boolean; tall?: boolean }>`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: end;
  padding: 40px;
  position: relative;

  &::before {
    transition: 1s ease-out;
    content: "";
    position: absolute;
    height: 0px;
    width: 3px;
    top: 0px;
    right: 0px;
    background-color: #ffc801;
  }

  &::after {
    transition: 1s ease-in;
    transition-delay: 1s;
    content: "";
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: 0px;
    right: 0px;
    background-color: #ffc801;
  }

  ${({ isMounted }) =>
    isMounted &&
    css`
      &::before {
        height: 100%;
      }

      &::after {
        width: 100%;
      }
    `}

  ${(props) =>
    props.tall &&
    css`
      display: flex;
      flex-direction: column;
      grid-column: auto;
      grid-row: span 2;
    `}

  img {
    width: 70%;
    aspect-ratio: 1;
    align-self: center;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const All = ({ theme }: { theme?: any }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Page>
      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 1,
            smallTablet: 2,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <IntroArticle isMounted={isMounted}>
            <h1 style={{ margin: 0, fontSize: 60 }}>Harry Collins</h1>
            <h1 style={{ margin: 0, padding: 0, lineHeight: 1 }}>
              Software Engineer
            </h1>
            <p style={{ fontWeight: 400 }}>
              <br />
              I'm a 26 year old software engineer based in London. <br />
              <br />
              I'm interested in roles that align with my values and come with a
              challenge. Here you'll find a bit about my work, and about me as a
              person. <br />
              <br />
              If you're looking to get in contact with me about my work or
              regarding oppurtunities, please click below.
            </p>
            <br />
            <Button text="Contact me" href="#footer" />
          </IntroArticle>
          <ImageArticle isMounted={isMounted}>
            <img src={Manteca} alt="Manteca" style={{}} />
          </ImageArticle>
        </Grid>
      </Section>

      <Section column>
        <Title text="What I Bring" />
        <Grid
          columns={{
            desktop: 3,
            tablet: 2,
            smallTablet: 2,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          {Tiles.map((content, index) => content)}
        </Grid>
      </Section>
    </Page>
  );
};

export default withTheme(All);
