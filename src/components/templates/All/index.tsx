import React from "react";
import Page from "../../atoms/Page";

import styled, { withTheme } from "styled-components";

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

const IntroArticle = styled.article<{ theme?: any }>`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: start;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  h1:nth-child(1) {
    font-size: 40px;
    color: ${({ theme }) => theme.primary};
    margin: 0px 0px 20px 0px;
    line-height: 1.25;
  }

  h1:nth-child(2) {
    color: transparent;
    font-style: italic;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: white;
    margin: 0px;
    padding: 0px;
    font-size: 60px;
    line-height: 1;
  }

  div:nth-child(1) {
    padding: 40px;
    background-color: #262c39;
    margin: 4px;
    height: 100%;
    border-radius: 45px;
    z-index: 10;

    div {
      padding: 0px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      order: 1;
    }

    div:nth-child(1) {
      div:nth-child(1) {
        margin: 0px;
        padding: 0px;
        flex-direction: column;

        div:nth-child(1) {
          margin: 40px 0px 0px 0px;
          width: 100%;
          order: 2;
        }
      }
    }

    button {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    a {
      align-self: center;
    }
    order: 2;
  }

  @media screen and (min-width: 700px) {
    grid-column: 1/3;
  }

  @media screen and (min-width: 1200px) {
    img {
      display: none;
    }
  }

  @keyframes rotation {
    0% {
      left: 0;
      top: 0;
    }

    25% {
      left: calc(100% - 100px);
      top: 0;
    }

    50% {
      top: calc(100% - 100px);
      left: calc(100% - 100px);
    }

    75% {
      left: 0;
      top: calc(100% - 100px);
    }

    100% {
      left: 0;
      top: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    align-self: center;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background: white;
    animation: rotation 5s linear infinite;
  }
`;

const ImageArticle = styled.article`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  grid-column: 3;

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
    align-items: center;
    order: 1;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const All = ({ theme }: { theme?: any }) => (
  <Page>
    <Section>
      <Grid
        columns={{
          desktop: 3,
          tablet: 1,
          smallTablet: 2,
          mobile: 1,
          smallMobile: 1,
        }}
      >
        <IntroArticle>
          <div>
            <HeaderContainer style={{ height: "auto" }}>
              <div>
                <h1>Welcome, I'm</h1>
                <h1>Harry Collins</h1>
              </div>
              <img
                src={Manteca}
                alt="Manteca"
                style={{
                  aspectRatio: 1,
                  height: 150,
                  borderRadius: "50%",
                }}
              />
            </HeaderContainer>
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
          </div>
        </IntroArticle>

        <ImageArticle>
          <img
            src={Manteca}
            alt="Manteca"
            style={{
              aspectRatio: 1,
              width: "100%",
              borderRadius: "50%",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
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

export default withTheme(All);
