import React, { useState } from 'react';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import Modal from 'react-modal'
import Memoji from '../../../assets/images/memoji.jpg'
import Grid from '../../atoms/Grid';
import Card from '../../atoms/Card';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Grad1 from '../../../assets/images/Grad1.png'
import Grad2 from '../../../assets/images/Grad2.png'
import Grad3 from '../../../assets/images/Grad3.png'

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
    products: ["Front End Core Services", "Mobile Apps", "Community"],
    stack: ["React", "Javascript", "HTML", "React Native", "GraphQL"],
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
    school: 'Saint Mary\'s Catholic School',
    qualification: 'A-Level',
    dates: 'Sept 2014 - July 2016',
  },
]

const StyledButton = styled.button`
  background-color: #ede0ff;
  color: #6603fc;
  border-radius: 12px;
  padding: 16px 16px;
  width: auto;
  border: none;
  font-weight: bold;
`

const ContentAndImage = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ContentContainer = styled.div`
  width: 60%;
  background-color: #c1e9ff;
  border-radius: 25px;
  padding: 16px;
  margin: 10px;
  margin-right: 0px;
  box-sizing: border-box;
  position: absolute;
  right: 16px;

  @media screen and (max-width: 600px) {
    position: relative;
    right: 0;
    width: 100%;
    margin: 16px;
    height: 100%;
  }

  @media screen and (max-width: 320px) {
    background: none;
    padding: 0;
    
  }
`

const MemojiContainer = styled.img`
  position: absolute;
  left: 16px;
  border-radius: 50%;
  height: 60%;
  aspect-ratio: 1 / 1;

  @media screen and (max-width: 600px) {
    position: relative;
    left: 0;
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

const loughboroughImages = [ Grad1, Grad2, Grad3 ];
const skills = ['Javascript • Typescript', 'React • React Native', 'HTML • CSS', 'NodeJS', 'GraphQL', 'UX Mindset', 'Communication', 'Determination', 'Empathy']

const ImagesCard = ({ images }: any) => (
  <Card noPadding circle bgColor='transparent'>
    <Slide prevArrow={<></>} nextArrow={<></>} transitionDuration={500}>
      {images?.map((image: any, index: number)=> (
        <div  className="each-slide" key={index}>
          <img style={{ height: '100%', width: '100%', borderRadius: '50%'}} src={image} alt="sliding"/>
        </div>
      ))} 
    </Slide>
  </Card>
)

const TitleCard = ({ title, bgColor, color }: { title: string, bgColor: string, color: string }) => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1 {
      color: ${color};
      font-size: 300%;

      @media screen and (max-width: 450px) {
        font-size: 250%;
      }
      @media screen and (max-width: 380px) {
        font-size: 200%;
      }
      @media screen and (max-width: 320px) {
        font-size: 150%;
      }
    }
  `

  return (
    <Card bgColor={bgColor} long>
      <Content>
        <h1>{title}</h1>
      </Content>
    </Card>
  )
}

const List = ({ title, titleColor, list }: any) => {
  const StyledList = styled.div<any>`
  text-align: center;
  height: 100%;

  h1 {
    color: ${(props) => props.titleColor};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;

    @media screen and (max-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  p { 
    padding: 0px;
    margin: 0px;
    color: white;

    @media screen and (max-width: 600px) {
      &::before {
        content: " ";
        white-space: pre;
      }
      &::after {
        content: " •";
      }

      &:nth-last-child(1) {
        &::after {
          content: "";
        }
      }
    }
  }
`
  return (
    <StyledList titleColor={titleColor}>
      <h1>{title}</h1>
      <div>
        {list.map((item: string) => (
          <p>{item}</p>
        ))}
      </div>
    </StyledList>
  )
}

const Resume = () => {
  const [modalContent, setModalContent] = useState<any>(null);
 
  const ContentModal = () => (
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
      <ContentModal />
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
          <Card tall>
            <div style={{ width: '100%' }}>
              <h2>{job.company}</h2>
              <p style={{ margin: 0 }}>{job.role}</p>
              <small style={{ fontStyle: 'italic', color: 'grey' }}>{job.dates}</small>

              <div style={{ marginTop: '32px' }}>
                <strong>Products</strong>
                <div style={{ marginTop: '10px' }}>
                  {job.products.map(product => (
                    <p style={{ margin: 0, marginTop: '5px' }}>{product}</p>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: '32px' }}>
                <strong>Technologies</strong>
                <div style={{ marginTop: '10px' }}>
                  {job.stack.map(tech => (
                    <p style={{ margin: 0, marginTop: '5px' }}>{tech}</p>
                  ))}
                </div>
              </div>

              <div style={{ position: 'absolute', bottom: 15, right: 15 }}>
                <StyledButton onClick={() => setModalContent(job)}>Learn more</StyledButton>
              </div>
            </div>
          </Card>
        ))}

        <TitleCard title='EDUCATION' bgColor='#fbb347' color='#ffedb3' />


        {education.map(education => (
          <Card>
          <div style={{ width: '100%' }}>
            <h3>{education.school}</h3>
            <p>{education.qualification}</p>
            <small>{education.dates}</small>
            <div style={{ position: 'absolute', bottom: 15, right: 15 }}>
              <StyledButton onClick={() => setModalContent(education)}>Learn more</StyledButton>
            </div>
          </div>
        </Card>
        ))}

        <ImagesCard images={loughboroughImages} />
        <Card long />
        
        <Card tall bgColor='#3b3a67'>
          <List title='SKILLS' titleColor='#8984bd' list={skills}/> 
        </Card>
      
        <Card />
        <Card /><Card />
      </Grid>
    </Page>
  )
}

export default Resume
