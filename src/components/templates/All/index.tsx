import React from "react";
import Page from "../../atoms/Page";

import styled, { withTheme } from "styled-components";

import Amsterdam from "../../../assets/images/Harry_Amsterdam.png";
import Singapore from "../../../assets/images/Singapore.jpg";
import HalfMarathon from "../../../assets/images/HalfMarathon.jpg";
import Weeknd from "../../../assets/images/Weeknd.jpg";
import HazelDam from "../../../assets/images/HazelDam.jpg";
import Venice from "../../../assets/images/travel/Venice.jpeg";
import Section from "../../atoms/Section";
import GridCard from "../../atoms/GridCard";
import Grid from "../../atoms/Grid";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

const Tiles = [
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Team Player</h2>
    <p style={{ marginTop: 48 }}>
      A team is only as good as how they feel. <br />
      <br />I believe morale, team work, and psychological safety come first.
    </p>
  </GridCard>,
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Forward Thinker</h2>
    <p style={{ marginTop: 48 }}>
      I believe in taking take to plan ahead and think about the long-term
      impact of our choices. <br /> <br />
      Build fast, learn fast, and avoid tech debt.
    </p>
  </GridCard>,
  <GridCard>
    <h2 style={{ textAlign: "center" }}>Communication</h2>
    <p style={{ marginTop: 48 }}>
      I’m a people person. I love chatting and solving problems with people.{" "}
      <br />
      <br />I always try to bring an ‘us vs. the problem’ mindset.
    </p>
  </GridCard>,
];

const ImageArticle = styled.article<{ theme?: any }>`
  margin-top: 50px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: end;
  overflow: hidden;
  border-radius: 50%;
  height: 300px;
  width: 300px;

  @media screen and (max-width: 700px) {
    width: 200px;
    height: 200px;
  }

  img {
    width: 100%;
  }
`;

const IntroArticle = styled.article`
  margin-top: 40px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 60px;
    line-height: 1;
  }

  .intro-text {
    margin: 40px 0px;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 38px;
    }

    a {
      align-self: center;
    }
    order: 2;
  }
`;

const StyledDiv = styled.div`
  transition: all 1s ease;
  position: relative;
  height: 500px;
  width: 100%;
  margin-bottom: 80px;


  @media screen and (max-width: 600px) {
    height: 400px;
  }

  @media screen and (max-width: 500px) {
    height: 350px;
  }
  

  p {
    z-index: -5;
    transition: all 0.5s ease;
  }

  &:hover {
    img {
      transform: rotate(0deg);

      &:nth-child(1) {
        left: 0px;
        right: calc(100% - 350px);
      }

      &:nth-child(2) {
        right: 25%;
      }

      &:nth-child(4) {
        left: 25%;
      }

      &:nth-child(5) {
        left: calc(100% - 350px);
      }
    }
  }
`;

const StyledImage = styled.img<{ index: number }>`
  position: absolute;
  object-fit: cover;
  border-radius: 15px;
  align-self: center;
  width: 350px;
  height: ${({ index }) => 450 - Math.abs((index - 3) * 40)}px;
  z-index: ${({ index }) => -Math.abs(index - 3)};
  transform: ${({ index }) => `rotate(${(index - 3) * 10}deg)`};
  border: 3px solid black;

  left: ${({ index }) => (index - 3) * 100}px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;

  top: 0px;
  bottom: 0px;
  margin-bottom: auto;
  margin-top: auto;
  transition: all 1s ease;

  @media screen and (max-width: 900px) {
    transform: ${({ index }) => `rotate(${(index - 3) * 5}deg)`};
    left: ${({ index }) => (index - 3) * 25}px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    height: ${({ index }) => 400 - Math.abs((index - 3) * 40)}px;
  }

  @media screen and (max-width: 500px) {
    width: 250px;
    height: ${({ index }) => 350 - Math.abs((index - 3) * 40)}px;
    transform: ${({ index }) => `rotate(${(index - 3) * 2}deg)`};
  }
`;

const All = ({ theme }: { theme?: any }) => (
  <Page>
    <Section column>
      <ImageArticle>
        <img src={Amsterdam} alt="Harry in Amsterdam" />
      </ImageArticle>

      <IntroArticle>
        <h1>Harry Collins</h1>
        <p className="intro-text">
          I'm a 27 year old software engineer based in London. I'm interested in
          roles that align with my values and come with a challenge.
          <br />
          <br />
          Here you'll find a bit about my work, and about me as a person. If
          you'd like to get in contact with me about my work or regarding
          opportunities, please click below.
        </p>
        <br />
        <Button text="Contact me" href="#footer" />
      </IntroArticle>
    </Section>

    <Section bgColor={theme.secondary} fullWidth>
      <Section column>
        <div style={{ marginBottom: 80 }}>
          <Title text="What I Bring" />
        </div>
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
    </Section>

    <Section column>
      <div style={{ marginBottom: 80 }}>
        <Title text="Who I am" />
      </div>

      <StyledDiv>
        <div style={{}}>
          <StyledImage src={Weeknd} alt="Harry in Amsterdam" index={1} />
          <StyledImage src={Venice} alt="Harry in Amsterdam" index={2} />
          <StyledImage src={Singapore} alt="Harry in Amsterdam" index={3} />
          <StyledImage src={HalfMarathon} alt="Harry in Amsterdam" index={4} />
          <StyledImage src={HazelDam} alt="Harry in Amsterdam" index={5} />
        </div>
      </StyledDiv>

      <Grid
        columns={{
          desktop: 2,
          tablet: 2,
          smallTablet: 2,
          mobile: 1,
          smallMobile: 1,
        }}
      >
        <Title text="Interests" subtitle />
        <p style={{ margin: 0, padding: 0 }}>
          I'm massively into the arts - I constantly read, watch live music, go
          to galleries, and enjoy film. <br />
          <br /> I'm currently reading some classics including Hemingway & Marx,
          and I recently got the chance to see the Weeknd and Charli XCX live,
          as well as a London-based indie band called Lowblock among others.
        </p>

        <Title text="Travel" subtitle />
        <p>
          In 2024 I visited Amsterdam, Indonesia, Singapore, and Scotland. In
          2025 I'll be travelling to Las Vegas and Japan.
        </p>

        <Title text="Charity" subtitle />
        <p>
          After volunteering with The Felix Project in 2024, the importance of communities solidified in my mind. I'll be returning throughout 2025 to lend a helping hand where I can and help supply food to those who need it. See more about what they do <a href="https://thefelixproject.org/" target="_blank" rel="noreferrer">here</a>.
        </p>
      </Grid>
    </Section>
  </Page>
);

export default withTheme(All);
