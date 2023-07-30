import React from 'react';
import { withTheme } from 'styled-components';
import Header from '../../atoms/Header';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import NotionHeader from '../../../assets/images/NotionHeader.jpeg'
import PortfolioLight from '../../../assets/images/PortfolioLightMode.png'
import SpotifyClient from '../../../assets/images/SpotifyClient.png'

import Section from '../../atoms/Section';

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
  'I recently began this project as a means of self-development, but like the idea of it being a resource for others too.',
  'Each topic has a variety of sub-topics/key areas in which more detail is gone into.',
  'The development of this resource has been both for my own learning, and for me to congregate the knowledge I already have. Thus, some content has been written by me directly, and some has been with the assistance of ChatGPT, and then reviewed before addition.'
]

const portfolioParagraphs = [
  "This website, created to share my professional and personal interests, has been built using ReactJS (Typescript) and NodeJS. Currently, the NodeJS server is being used only to interact with and return data from the Spotify API, which is utilised in the 'About' section.",
  'The front end is hosted on Cloudflare, and the backend server is hosted on Google Cloud Platform.',
  'Changes pushed trigger a testing pipeline in CircleCI, which then deploys to Cloudflare and GCP respectively.',
  'The status of the project is complete, however I will make additions and changes over time.'
]

const spotifyClientParagraphs = [
  'Built using ReactJS and NodeJS',
  'This is a small web app I built to experiment with full stack engineering as a junior engineer; it allows the user to sign into their Spotify account using the Spotify API and view their most played songs and their playlists, and play music from within the browser.',
  'As this was more of a learning piece, it was finished but never deployed.'
]

const ImageArticle = styled.article<{ image: any }>`
  width: 40%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})` }; 
  display: flex;
  background-repeat: no-repeat;
  background-size: auto;
  height: 400px;
  background-size: cover;
`

const Projects = ({ theme }: { theme?: any }) => {

  return (
    <Page>
      <Header title='Projects' bgColor={theme.body}/>

      <Section>
        <article style={{ width: '60%'}}>
          <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Notion Learning Resource
            </h1>
          {notionParagraphs}
        </article>
        <ImageArticle image={NotionHeader} />          
      </Section>

      <Section>
        <ImageArticle image={PortfolioLight}/>          
        <article style={{ width: '60%', marginLeft: 24}}>
          <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Portfolio
            </h1>
          {portfolioParagraphs}
        </article>
      </Section>

      <Section>
        <article style={{ width: '60%' }}>
          <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
              Spotify Client
            </h1>
          {spotifyClientParagraphs}
        </article>
        <ImageArticle image={SpotifyClient} />          

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
