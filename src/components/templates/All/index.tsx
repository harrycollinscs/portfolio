import React from "react";
import Page from "../../atoms/Page";

import styled, { withTheme } from "styled-components";

import Amsterdam from "../../../assets/images/Harry_Amsterdam.png";
import Singapore from "../../../assets/images/Singapore.jpg";
import HalfMarathon from "../../../assets/images/HalfMarathon.jpg";
import Weeknd from "../../../assets/images/Weeknd.jpg";
import HazelDam from "../../../assets/images/HazelDam.jpg";
import Venice from "../../../assets/images/travel/Venice.jpeg";
import Wallows from "../../../assets/images/Wallows.jpg";
import GiliT from "../../../assets/images/GiliT.jpg";
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
      I believe in taking time to plan ahead and think about the long-term
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
  position: relative;
  transition: all 1s ease;
  position: relative;
  height: 500px;
  width: 100%;
  margin-bottom: 80px;
  padding-bottom: 60px;

  @media screen and (max-width: 600px) {
    display: none;
  }

  p {
    z-index: -5;
    transition: all 0.5s ease;
  }

  @media screen and (min-width: 1800px) {
    &:hover {
      img {
        transform: rotate(0deg);

        &:nth-child(1) {
          left: 0;
          right: calc(100% - 350px);
        }

        &:nth-child(2) {
          left: -40%;
        }

        &:nth-child(4) {
          left: 40%;
        }

        &:nth-child(5) {
          left: calc(100% - 350px);
        }
      }
    }
  }

  @media screen and (min-width: 1801px) {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledImage = styled.img<{ index: number }>`
  object-fit: cover;
  border-radius: 15px;
  align-self: center;
  width: 12vw;
  height: 400px;
  transition: all 1s ease;

  @media screen and (max-width: 1800px) {
    position: absolute;
    width: 350px;
    height: ${({ index }) => 450 - Math.abs((index - 3) * 40)}px;
    z-index: ${({ index }) => -Math.abs(index - 3)};
    transform: ${({ index }) => `rotate(${(index - 3) * 10}deg)`};

    left: calc(${({ index }) => index - 3} * 5vw);
    right: 0px;
    margin-left: auto;
    margin-right: auto;

    top: 0px;
    bottom: 0px;
    margin-bottom: auto;
    margin-top: auto;
  }

  @media screen and (max-width: 900px) {
    transform: ${({ index }) => `rotate(${(index - 3) * 5}deg)`};
    left: ${({ index }) => (index - 3) * 25}px;
  }
`;

const MainImage = styled.img`
  width: 350px;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;

  @media screen and (max-width: 600px) {
    border-radius: 0;
    width: 100vw;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  @media screen and (max-width: 600px) {
    padding: 0px 40px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 80px;
  padding-top: 60px;

  @media screen and (max-width: 600px) {
    margin-bottom: 0px;
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
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          {Tiles.map((content, index) => content)}
        </Grid>
      </Section>
    </Section>

    <Section column>
      <TitleContainer>
        <Title text="Who I am" />
      </TitleContainer>

      <StyledDiv>
        <StyledImage src={Weeknd} alt="Weeknd concert" index={1} />
        <StyledImage src={Venice} alt="Harry in Venice" index={2} />
        <StyledImage src={Singapore} alt="Harry in Singapore" index={3} />
        <StyledImage
          src={HalfMarathon}
          alt="Harry Hackney Half Marathon"
          index={4}
        />
        <StyledImage src={HazelDam} alt="Harry in Amsterdam" index={5} />
      </StyledDiv>
    </Section>

    <Section>
      <Grid
        columns={{
          desktop: 2,
          tablet: 2,
          smallTablet: 2,
          mobile: 1,
          smallMobile: 1,
        }}
      >
        <MainImage src={Wallows} alt="Wallows concert" />
        <ContentContainer>
          <Title text="Interests" subtitle />
          <p style={{ margin: "100px 0px 0px 0px", padding: 0 }}>
            I'm massively into the arts - I constantly read, watch live music,
            go to galleries, and enjoy film. <br />
            <br /> I'm currently reading some classics including Hemingway &
            Marx, and I recently got the chance to see the Weeknd and Charli XCX
            live, as well as a London-based indie band called Lowblock among
            others.
          </p>
        </ContentContainer>

        <MainImage src={GiliT} alt="Gili T Island" />

        <ContentContainer>
          <Title text="Travel & Sport" subtitle />
          <p style={{ margin: "100px 0px 0px 0px", padding: 0 }}>
            I love to travel - In 2024 I visited Amsterdam, Indonesia,
            Singapore, and Scotland, and in 2025 I'll be seeing the Grand Canyon
            and the Shibuya Scramble Crossing as I fly out to Las Vegas and
            Japan. I'm also a regular at the gym, basketball court, and I'm no
            stanger to running, having completed the Hackney Half Marathon 2024.
          </p>
        </ContentContainer>

        <MainImage src={Weeknd} alt="Weeknd concert" />

        <ContentContainer>
          <Title text="Charity" subtitle />
          <p style={{ margin: "100px 0px 0px 0px", padding: 0 }}>
            After volunteering with The Felix Project in 2024, the importance of
            communities solidified in my mind. I'll be returning throughout 2025
            to lend a helping hand where I can and help supply food to those who
            need it. See more about what they do{" "}
            <a
              href="https://thefelixproject.org/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </ContentContainer>
      </Grid>
    </Section>
  </Page>
);

export default withTheme(All);
