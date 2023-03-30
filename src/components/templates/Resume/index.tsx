import React from 'react'
import Page from '../../atoms/Page'
import Header from '../../atoms/Header'
import Section from '../../atoms/Section'
import Vodafone from '../../../assets/images/VodafoneGreen.jpeg'
import giffgaff from '../../../assets/images/giffgaff.jpg'

import styled from 'styled-components'
import GridCard from '../../atoms/GridCard'

const hardSkills = [
  {
    name: 'Typescript/Javascript',
    progress: '70',
  },
  {
    name: 'React/Native',
    progress: '70',
  },
  {
    name: 'NodeJS',
    progress: '60',
  },
  {
    name: 'HTML/CSS',
    progress: '70',
  },
  {
    name: 'GraphQL',
    progress: '50',
  },
  {
    name: 'Pair programming',
    progress: '85',
  }
]

const softSkills = [
  'Communication',
  'Determination',
  'UX Mindset',
  'Leadership',
  'Empathy',
]

const Image = styled.img`
  // max-height: 25vh;
  max-width: 80%;
  aspect-ratio: 1/1;
  // height: 100%;
  // width: auto;
  margin: 16px;

  @media screen and (max-width: 900px) {
    // max-width: 100%;
    // max-height: 100%;
    // width: 100%;
  }
`

const ImageSectionContent = styled.div`
  width: 100%
  height: 100%;
  box-sizing: border-box;
 
  @media screen and (min-width: 1021px) {
    padding-top: 0;

    &:nth-child(1) {
      padding-left: 0px;
    }
  
    &:nth-child(2) {
      padding-right: 0px;
    }
  }

  @media screen and (max-width: 1020px) {
    padding-left: 0;
  }

  @media screen and (max-width: 700px) {
    padding: 24px;
  }

  h1 {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      color: grey;
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 90vw;
  box-sizing: border-box;
  padding: 16px 0px;
  min-height: auto;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`

const ImageAndContent = ({ title, subtitle, image, listTitle, listItems }: { title: string, subtitle: string, image: { src: string | undefined, alt: string }, listTitle: string, listItems: string[]}) => (
  <ImageSectionContent>
    <div>
      <h1>{title}</h1>
      <small>{subtitle}</small>
    </div>
    <Image src={image.src} alt={image.alt} style={{ borderRadius: '100%' }}/>
    <h3>{listTitle}</h3>
    <ul style={{ textAlign: 'left', padding: '16px' }}>
      {
        listItems.map(item => (
          <li>{item}</li>
        ))
      }
    </ul>
  </ImageSectionContent>
)

const Resume = () => {
  return (
    <Page>
      <Header title='Resume' />

      <Section>
        <h1>Harry Collins</h1>
        <p>Hard-working and creative software engineer currently employed in the telecoms industry. 3½ years of professional experience, with focus in full-stack web development and mobile app development utilising React Native/React/NodeJS. Bachelors degree in Computer Science (BSc).</p>
      </Section>

      <Grid>
        <GridCard>
          <ImageAndContent
            title='Vodafone'
            subtitle='Aug 2022 - Present'
            image={{ src: Vodafone, alt: 'vodafone' }}
            listTitle='Software Engineer'
            listItems={[ 'Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.', 'Built and deployed custom React components, reusable helper functions, etc.', 'Liaised with backend engineers to formulate data structures for efficient cross-stack data handling.' ]}
          />
        </GridCard>

        
        <GridCard>
          <ImageAndContent
            title='giffgaff'
            subtitle='Sept 2019 - June 2022'
            image={{ src: giffgaff, alt: 'giffgaff' }}
            listTitle='Software Engineer'
            listItems={["Led implementation of 'Help and Search' section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).", 'Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).', 'Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).', 'Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.' ]}
          />
        </GridCard>

        <GridCard>
          <h1 style={{ margin: 0 }}>Skills</h1>
          <div style={{ margin: '48px 0px' }}>{hardSkills.map(skill => <p style={{ margin: 0 }}>{skill.name}</p>)}</div>
          <div>{softSkills.map(skill => <p style={{ margin: 0 }}>{skill}</p>)}</div>
        </GridCard>

        </Grid>
    </Page>
  )
}

export default Resume
