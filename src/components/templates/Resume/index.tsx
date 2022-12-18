import React, { useState } from 'react';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import Modal from 'react-modal'
import Memoji from '../../../assets/images/memoji.jpg'
import Grid from '../../atoms/Grid';
import Card from '../../atoms/Card';
import 'react-slideshow-image/dist/styles.css'

import Grad1 from '../../../assets/images/Grad1.png'
import Grad2 from '../../../assets/images/Grad2.png'
import Grad3 from '../../../assets/images/Grad3.png'
import ResumeCard from '../../molecules/ResumeCard';
import TitleCard from '../../molecules/TitleCard';
import ListCard from '../../molecules/ListCard';
import ImagesCard from '../../molecules/ImagesCard';

const jobs = [
  {
    company: 'Vodafone',
    role: 'Software Engineer',
    dates: 'Aug 2022 - Present',
    image: "https://i.pinimg.com/originals/b4/5c/73/b45c73344e728b81ceae1c7b539b75e5.png",
    products: ["Upgrades & Offers"],
    stack: ['React', 'Typescript', 'HTML'],
    bulletPoints: [
      'Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers'
    ]
  },
  {
    company: 'giffgaff',
    role: 'Software Engineer',
    dates: 'Sept 2019 - June 2022',
    image: "https://images.easyfundraising.org.uk/retailer/cropped/logo-giffgaff-1546873593.jpg",
    products: ["FE Core", "Mobile Apps", "Community"],
    stack: ["React/Native", "Javascript", "GraphQL", "HTML"],
    bulletPoints: [
      'Led implementation of  ‘Help and Search’ section into giffgaff mobile application, featuring live chat (React Native, Typescript, Redux, GraphQL).',
      'Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).',
      'Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).',
      'Developed Flarum platform extensions for Community platform (Javascript/Mithril, PHP).',
      'Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.'
    ]
  }
];

const education = [
  {
    school: 'Loughborough University',
    qualification: 'BSc Computer Science',
    dates: 'Sept 2016 - July 2019',
  },
  {
    school: 'St. Mary\'s Sixth Form',
    qualification: 'A-Level',
    dates: 'Sept 2014 - July 2016',
  },
]

const loughboroughImages = [ Grad1, Grad2, Grad3 ];

const skills = ['Javascript • Typescript', 'React • React Native', 'HTML • CSS', 'NodeJS', 'GraphQL', 'UX Mindset', 'Communication', 'Determination', 'Empathy']

const StyledButton = styled.button`
  background-color: #ede0ff;
  color: #6603fc;
  border-radius: 12px;
  padding: 12px 16px;
  width: auto;
  border: none;
  font-weight: bold;
`

const ContentAndImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 380px) {
    justify-content: center;
  }
`

const ContentContainer = styled.div`
  background-color: #c1e9ff;
  border-radius: 25px;
  padding: 16px;
  box-sizing: border-box;
  right: 16px;
  align-items: center;

  @media screen and (max-width: 600px) {
    right: 0;
    width: 100%;
  }

  @media screen and (max-width: 380px) {
    height: 100%;
    display: flex;
  }

  @media screen and (max-width: 320px) {
    background: none;
    padding: 0;
    margin: 0;
  }
`

const MemojiContainer = styled.img`
  border-radius: 50%;
  height: 60%;
  aspect-ratio: 1 / 1;
  margin-right: 16px;

  @media screen and (max-width: 600px) {
    margin: 0;
    height: 50%;
  }

  @media screen and (max-width: 450px) {
    height: 40%;
  }

  @media screen and (max-width: 400px) {
    height: 30%;
  }

  @media screen and (max-width: 380px) {
    display: none;
  }
`

const StyledModal = styled(Modal)`
  position: fixed;
  width: 60vw;
  aspect-ratio: 1/1;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  padding: 32px;
  transform: translate(-50%, -50%);
  height: 50%;
  border-radius: 25px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: white;
`

const Resume = () => {
  // const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>(null);
 
  const ContentModal = ({ isOpen, title, subtitle, image, bulletPoints }: any) => (
    <StyledModal
        isOpen={modalContent}
        onAfterOpen={() => {}}
        onRequestClose={() => {}}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex ', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ marginBottom: 0 }}>{modalContent?.role}</h1>
            <small>{modalContent?.dates}</small>
          </div>
          <img style={{ height: '100px', borderRadius: '25px' }} src={modalContent?.image} alt={modalContent?.company}/>
        </div>
        <ul style={{ maxWidth: '80%', marginTop: '40px' }}>
          {modalContent?.bulletPoints?.map((bullet: any) => (
            <li style={{ marginTop: '8px' }}>{bullet}</li>
          ))}
        </ul>
        <div style={{ position: 'absolute', bottom: 15, right: 15 }}>
          <StyledButton onClick={() => setModalContent(null)}>Close</StyledButton>
        </div>
      </StyledModal>
  )

  return (
    <Page>
      <ContentModal isOpen={modalContent} title='dummy' subtitle='dummy' image='dummy' bulletPoint='dummy'/>
      <Grid>
        <TitleCard title='EMPLOYMENT' bgColor='#003666' color='#c1e9ff' />
        
        <Card bgColor="#d6f5ff" long>
          <ContentAndImage> 
            <MemojiContainer src={Memoji} alt=""/>
            <ContentContainer>
              <p>Driven software engineer with 3 years of professional experience in software development. Focus in web and mobile app development.</p>
            </ContentContainer>
          </ContentAndImage>
        </Card>

        {jobs.map(job => (
          <ResumeCard title={job.company} subtitle={job.role} subsubtitle={job.dates} lists={[{title: 'Products', list: job.products}, {title: 'Technologies', list: job.stack }]} action={() => setModalContent(job)} isTall={true} />
        ))}

        <TitleCard title='EDUCATION' bgColor='#fbb347' color='#ffedb3' />

        {education.map(education => (
          <ResumeCard title={education.school} subtitle={education.qualification} subsubtitle={education.dates} action={() => setModalContent(education)} />
        ))}

        <ImagesCard images={loughboroughImages} />

        <Card long />
        
        <ListCard title='SKILLS' listItems={skills} bgColor='#3b3a67' titleColor='#8984bd' />

        <Card />
      </Grid>
    </Page>
  )
}

export default Resume
