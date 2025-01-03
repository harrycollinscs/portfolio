import styled, { css, withTheme } from "styled-components";
import HelpAndSupport from "../../../assets/images/HelpAndSupport.png";
import NotionDevice from "../../../assets/images/NotionDevice.png";
import PortfolioDevice from "../../../assets/images/PortfolioDevice.png";
import SpotifyClient from "../../../assets/images/SpotifyClient.png";
import Page from "../../atoms/Page";

import Grid from "../../atoms/Grid";
import Section from "../../atoms/Section";
import Title from "../../atoms/Title";
import Header from "../../atoms/Header";

const notionParagraphs = [
  "With the goal of increasing my breadth of knowledge in the world of Software Development, I have created a Notion document containing some important topics that I believe will be helpful to learn for any Full Stack Engineer.",
  " I recently began this project as a means of self-development, but like the idea of it being a resource for others too.",
  " Each topic has a variety of sub-topics/key areas in which more detail is gone into.",
  " The development of this resource has been both for my own learning, and for me to congregate the knowledge I already have. Thus, some content has been written by me directly, and some has been with the assistance of ChatGPT, and then reviewed before addition.",
];

const portfolioParagraphs = [
  "This website, created to share my professional and personal interests, has been built using ReactJS (Typescript) and NodeJS. Currently, the NodeJS server is being used only to interact with and return data from the Spotify API, which is utilised in the 'About' section.",
  " The front end is hosted on Cloudflare, and the backend server is hosted on Google Cloud Platform.",
  " Changes pushed trigger a testing pipeline in CircleCI, which then deploys to Cloudflare and GCP respectively.",
  " The status of the project is complete, however I will make additions and changes over time.",
];

const HelpAndSupportParagraphs = [
  "During my time at giffgaff, I was fortunate enough to work on the giffgaff mobile app. As part of this, I worked with UX/UI designers and other engineers to design this brand new in-app feature.",
  " Built using React Native & GraphQL, with a PHP backend, I worked with another engineer to bring this feature to life from the ground up.",
  " This section of the app allows users to see FAQs, search through community-answered questions, and ask their own questions within a near-real-time chat experience.",
];

const spotifyClientParagraphs = [
  "Built using ReactJS and NodeJS.",
  " This is a small web app I built to experiment with full stack engineering as a junior engineer; it allows the user to sign into their Spotify account using the Spotify API and view their most played songs and their playlists, and play music from within the browser.",
  " As this was more of a learning piece, it was finished but never deployed.",
];

const TextArticle = styled.article<{ left?: boolean }>`
  h1 {
    margin-bottom: 40px;
  }
  
  ${({ left }) =>
    left
      ? `
    margin-left: 48px;
    text-align: right;
  `
      : `
    margin-right: 48px;
    text-align: left;
  `}

  @media screen and (max-width: 1100px) {
    text-align: left;
    margin: 0;
  }
`;

const ImageArticle = styled.article<{ image: any; left?: boolean }>`
  display: flex;
  min-height: 50vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url(${image});`}

  @media screen and (max-width: 1100px) {
    order: 1;
    background: none;
    background-image: ${({ image }) => `url(${image});`}
    background-size: cover;
  }

  ${({ image }) => css`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${image});

    @media screen and (max-width: 1100px) {
      order: 1;
      background: none;
      background-image: url(${image});
      background-size: cover;
    }
  `}
`;

const Projects = ({ theme }: { theme?: any }) => {
  return (
    <Page>
      <div style={{ marginTop: "60px", width: "100%" }}>
        <Header title="Projects" bgColor={theme.secondary} />
      </div>
      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 1,
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <TextArticle>
            <Title text="Help & Support" />
            <p>{HelpAndSupportParagraphs}</p>
          </TextArticle>
          <ImageArticle image={HelpAndSupport} left />
        </Grid>
      </Section>

      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 1,
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <ImageArticle image={PortfolioDevice} />
          <TextArticle left>
            <Title text="Portfolio" />
            <p>{portfolioParagraphs}</p>
          </TextArticle>
        </Grid>
      </Section>

      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 1,
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <TextArticle>
            <Title text="Notion Learning Resource" />
            <p>{notionParagraphs}</p>
          </TextArticle>
          <ImageArticle image={NotionDevice} left />
        </Grid>
      </Section>

      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 1,
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          <ImageArticle image={SpotifyClient} />
          <TextArticle left>
            <Title text="Spotify Client" />
            <p>{spotifyClientParagraphs}</p>
          </TextArticle>
        </Grid>
      </Section>
    </Page>
  );
};

export default withTheme(Projects);
