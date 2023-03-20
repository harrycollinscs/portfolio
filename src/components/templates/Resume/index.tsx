import React from 'react'
import Page from '../../atoms/Page'
import Header from '../../atoms/Header'
import Section from '../../atoms/Section'
import Vodafone from '../../../assets/images/VodafoneGreen.jpeg'
import giffgaff from '../../../assets/images/giffgaff.jpg'

import styled from 'styled-components'

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
  max-height: 25vh;
  max-width: 25vw;
  height: 100%;
  width: auto;

  @media screen and (max-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
`

const ImageSection = styled.div`
  padding: 24px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  line-height: 2;
  align-items: flex-start;
  text-align: left;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    width: 80vw;
    
    &:nth-child(4) {
      div {
        order: 2;
      }
    }
  }
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
    padding: 0;
  }
`

const ImageSectionContent = styled.div`
  padding: 24px;
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

const Intro = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 25vh;
  line-height: 2;
  padding: 24px;

  h1 {
    margin: 0;
  }

  @media screen and (min-width: 2000px) {
    width: 60vw;
  }
`

const ProgressBar = styled.progress`
  border-radius: 25px; 
  height: 8px;
  margin-left: 8px;

  &::-webkit-progress-bar {
    background-color: #efefef;
    border-radius: 25px;
  }
  
  &::-webkit-progress-value {
    background-color: #2f295e;
    border-radius: 25px;
  }

  @media screen and (max-width: 499px) {
    display: none;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;

  @media screen and (max-width: 799px) {
    flex-direction: column;
    align-items: center;
    height: 50vh;
  }
`

const HardSkillsContainer = styled.div`
  width: 400px;

  @media screen and (max-width: 499px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const HardSkill = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 499px) {
    flex-direction: column;
  }
`

const SoftSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
`

const Resume = () => {
  return (
    <Page>
      <Header title='Resume' />

      <Section>
        <Intro>
          <h1>Harry Collins</h1>
          <p>Hard-working and creative software engineer currently employed in the telecoms industry. 3½ years of professional experience, with focus in full-stack web development and mobile app development utilising React Native/React/NodeJS. Bachelors degree in Computer Science (BSc).</p>
        </Intro>

        <ImageSection>
          <Image src={Vodafone} alt='vodafone'/>
          <ImageSectionContent>
            <div>
              <h1>Vodafone</h1>
              <small>Aug 2022 - Present</small>
            </div>
            <p>Software Engineer</p>
            <ul>
              <li>Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.</li>
              <li>Built and deployed custom React components, reusable helper functions, etc.</li>
              <li>Liaised with backend engineers to formulate data structures for efficient cross-stack data handling.</li>
            </ul>
          </ImageSectionContent>
        </ImageSection>
        

        <ImageSection>
          <ImageSectionContent>
            <div>
              <h1>giffgaff</h1>
              <small>Sept 2019 - June 2022</small>
            </div>
            <p>Software Engineer</p>
            <ul>
              <li>Led implementation of 'Help and Search' section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).</li>
              <li>Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).</li>
              <li>Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).</li>
              <li>Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.</li>
            </ul>
          </ImageSectionContent>
          <Image src={giffgaff} alt='giffgaff'/>
        </ImageSection>

        <Section>
          <h1>Skills</h1>
          <SkillsContainer>
            <HardSkillsContainer>
              {
                hardSkills.map((skill: { name: string; progress: string}, index) => (
                  <HardSkill key={index}>
                    {skill.name}
                    <ProgressBar value={skill.progress} max='100' />
                  </HardSkill>
                ))
              } 
            </HardSkillsContainer>
            <SoftSkillsContainer>
              {
                softSkills.map((skill, index) => (
                  <div key={index}>
                    {skill}
                  </div>
                ))
              }
            </SoftSkillsContainer>
          </SkillsContainer>
          
        </Section>

      </Section>
    </Page>
  )
}

export default Resume
