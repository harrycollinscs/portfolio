import React from 'react'
import Page from '../../atoms/Page'
import Section from '../../atoms/Section'
import Vodafone3 from '../../../assets/images/vodafone3.svg'
import giffgaff2 from '../../../assets/images/giffgaff2.webp'
import GridCard from '../../atoms/GridCard'
import Grid from '../../atoms/Grid'
import ImageCard from '../../molecules/ImageCard'
import { withTheme } from 'styled-components'

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

const Resume = (props : { theme?:any }) => {
  return (
    <Page>
      <Section>
        <h1>Harry Collins</h1>
        <p>
          Hard-working and creative software engineer currently employed in the telecoms industry.<br/>
          3½ years of professional experience, with focus in full-stack web development and mobile app development utilising React Native/React/NodeJS.<br/>
          Bachelors degree in Computer Science (BSc).
        </p>
      </Section>

      <Grid columns={{ desktop: 3, tablet: 2, smallTablet: 1, mobile: 1, smallMobile: 1 }}>

        <ImageCard
          image={{ src: Vodafone3, alt: 'vodafone' }}
          headerLeft={<h2>Vodafone</h2>}
          headerRight={<small style={{ color: 'grey' }}>Aug 2022 - Present</small>}
          title={<h2>Software Engineer</h2>}
          paragraphs={[
            'Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.',
            'Built and deployed custom React components, reusable helper functions, etc.',
            'Liaised with backend engineers to formulate data structures for efficient cross-stack data handling.'
          ]} 
          isList
        />

        <ImageCard
          image={{ src: giffgaff2, alt: 'giffgaff' }}
          headerLeft={<h2>giffgaff</h2>}
          headerRight={<small style={{ color: 'grey' }}>Sept 2019 - June 2022</small>}
          title={<h2>Software Engineer</h2>}
          paragraphs={[
            "Led implementation of 'Help and Search' section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).",
            'Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).',
            'Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).',
            'Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.'
          ]} 
          isList
        />

        <GridCard>
          <div style={{  height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ margin: 0 }}>Skills</h1>
            <div style={{ margin: '48px 0px' }}>{hardSkills.map(skill => <p style={{ margin: 0 }}>{skill.name}</p>)}</div>
            <div>
              {softSkills.map(skill => <p style={{ margin: 0 }}>{skill}</p>)}
            </div>
          </div>
        </GridCard>

      </Grid>

      <Section bgColor={props.theme.body}/>

    </Page>
  )
}

export default withTheme(Resume)
