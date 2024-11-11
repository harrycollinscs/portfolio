import React, { useState } from "react";
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

const IntroArticle = styled.article<{ theme?: any }>`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  align-items: start;
  background-color: ${({ theme }) => theme.body};
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  grid-column: 1/2;
  box-sizing: border-box;
  height: 100%;
  padding-top: 40px;

  h1:nth-child(1) {
    font-size: 70px;
    margin: 0px;
    padding: 0px;
    line-height: 1;
  }

  h1:nth-child(2) {
    color: black;
    margin: 0px;
    padding: 0px;
    font-size: 60px;
    line-height: 1;
  }

  div:nth-child(1) {
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
`;

const ImageArticle = styled.article`
  justify-content: flex-end;
  flex-direction: row;
  display: flex;
  grid-column: 3/5;

  img {
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1;
    text-align: end;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
    align-items: center;
    order: 1;
  }
`;

const HeaderContainer = styled.div`
  align-items: center;
`;

const All = ({ theme }: { theme?: any }) => {
  return (
    <Page>
      <Section>
        <Grid
          columns={{
            desktop: 4,
            tablet: 1,
            smallTablet: 2,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <IntroArticle>
            {/* <div> */}
            <HeaderContainer style={{ height: "auto" }}>
              <h1>Hey, I'm Harry!</h1>
            </HeaderContainer>
            <p>
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
            {/* </div> */}
          </IntroArticle>

          <ImageArticle>
            <img src={Manteca} alt="Manteca" />
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
