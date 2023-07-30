import React from 'react';
import { css, withTheme } from 'styled-components';
import Header from '../../atoms/Header';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import NotionDevice from '../../../assets/images/NotionDevice.png'
import PortfolioDevice from '../../../assets/images/PortfolioDevice.png'
import SpotifyClient from '../../../assets/images/SpotifyClient.png'
import HelpAndSupport from '../../../assets/images/HelpAndSupport.png'

import Section from '../../atoms/Section';
import Grid from '../../atoms/Grid';

// const Pill = styled.p<{isComplete?: boolean}>`
//   color: ${({ theme, isComplete }) => isComplete ? theme.completeText : theme.inProgressText};
//   background-color: ${({ theme, isComplete }) => isComplete ? theme.completeBgColor :theme.inProgressBgColor};
//   padding: 0px 10px;
//   box-sizing: border-box;
//   border-radius: 10px;
//   text-align: center;
//   white-space: nowrap;
// `

const notionParagraphs = [
  'With the goal of increasing my breadth of knowledge in the world of Software Development, I have created a Notion document containing some important topics that I believe will be helpful to learn for any Full Stack Engineer.',
  ' I recently began this project as a means of self-development, but like the idea of it being a resource for others too.',
  ' Each topic has a variety of sub-topics/key areas in which more detail is gone into.',
  ' The development of this resource has been both for my own learning, and for me to congregate the knowledge I already have. Thus, some content has been written by me directly, and some has been with the assistance of ChatGPT, and then reviewed before addition.'
]

const portfolioParagraphs = [
  "This website, created to share my professional and personal interests, has been built using ReactJS (Typescript) and NodeJS. Currently, the NodeJS server is being used only to interact with and return data from the Spotify API, which is utilised in the 'About' section.",
  ' The front end is hosted on Cloudflare, and the backend server is hosted on Google Cloud Platform.',
  ' Changes pushed trigger a testing pipeline in CircleCI, which then deploys to Cloudflare and GCP respectively.',
  ' The status of the project is complete, however I will make additions and changes over time.'
]

const HelpAndSupportParagraphs = [
  'During my time at giffgaff, I was fortunate enough to work on the giffgaff mobile app. As part of this, I worked with UX/UI designers and other engineers to design this brand new in-app feature.',
  ' Built using React Native & GraphQL, with a PHP backend, I worked with another engineer to bring this feature to life from the ground up.',
  ' This section of the app allows users to see FAQs, search through community-answered questions, and ask their own questions within a near-real-time chat experience.'
]

const spotifyClientParagraphs = [
  'Built using ReactJS and NodeJS.',
  ' This is a small web app I built to experiment with full stack engineering as a junior engineer; it allows the user to sign into their Spotify account using the Spotify API and view their most played songs and their playlists, and play music from within the browser.',
  ' As this was more of a learning piece, it was finished but never deployed.'
]

const TextArticle = styled.article<{ left?: boolean }>`
  ${({ left }) => left ?`
    margin-left: 48px;
    text-align: right;
  ` :
  `
    margin-right: 48px;
    text-align: left;
  `
}

  @media screen and (max-width: 1100px) {
    text-align: left;
    margin: 0;
  }
`

const ImageArticle = styled.article<{ image: any, left?: boolean }>`
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
`

const Projects = ({ theme }: { theme?: any }) => {

  return (
    <Page>
      <Header title='Projects' bgColor={theme.body}/>


      <Section>
        <Grid columns={{ desktop: 2, tablet: 1, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
          <TextArticle>
            <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Help and Support
            </h1>
            <p>{HelpAndSupportParagraphs}</p>
          </TextArticle>
          <ImageArticle image={HelpAndSupport} left/>     
        </Grid>     
      </Section>
      

      <Section>
        <Grid columns={{ desktop: 2, tablet: 1, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
          <ImageArticle image={PortfolioDevice} />     
          <TextArticle left>
            <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Portfolio
            </h1>
            <p>{portfolioParagraphs}</p>
          </TextArticle>
        </Grid>     
      </Section>

      <Section>
        <Grid columns={{ desktop: 2, tablet: 1, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
          <TextArticle>
            <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Notion Learning Resource
            </h1>
            <p>{notionParagraphs}</p>
          </TextArticle>
          <ImageArticle image={NotionDevice} left /> 
        </Grid>     
      </Section>

      <Section>
        <Grid columns={{ desktop: 2, tablet: 1, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
        <ImageArticle image={SpotifyClient} />          
        <TextArticle left>
          <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
            Spotify Client
          </h1>
          <p>{spotifyClientParagraphs}</p>
        </TextArticle>
        </Grid>
      </Section>


      {/* <Section>
      <Grid columns={{ desktop: 3, tablet: 2, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
        <ImageCard
          image={{ src: NotionHeader, alt: 'notion' }}
          headerLeft={<ProjectTitle>Notion Learning Resource</ProjectTitle>}
          headerRight={<Pill>In progress</Pill>}
          paragraphs={notionParagraphs}
          link='https://harry-collins.notion.site/Software-Development-b1672b932dee4455bbe089ed2bf84a3a'
        />

        <ImageCard
          image={{ src: theme.light ? PortfolioDark : PortfolioLight, alt: 'portfolio' }}
          headerLeft={<ProjectTitle>Portfolio site</ProjectTitle>}
          headerRight={<Pill isComplete>Complete</Pill>}
          paragraphs={portfolioParagraphs} 
          link='https://github.com/harrycollinscs/portfolio'
        />

        <ImageCard
          image={{ src: SpotifyClient, alt: 'spotify-client' }}
          headerLeft={<ProjectTitle>Spotify client</ProjectTitle>}
          headerRight={<Pill isComplete>Complete</Pill>}
          paragraphs={spotifyClientParagraphs} 
        />
      </Grid>
      </Section> */}

    </Page>
  )
}

export default withTheme(Projects)
