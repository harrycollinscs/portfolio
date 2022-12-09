import React, { useState } from 'react';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import Modal from 'react-modal'
import Memoji from '../../../images/memoji.jpg'


const Container = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  justify-content: center;
  
`

const CardContainer = styled.div<any>`
  background: ${(props) => props.background ? props.background : 'white'};
  border-radius: 25px;
  padding: 16px;
  height: 250px;
  width: ${(props) => props.width * 125}px;
  margin: 20px;
  position: relative;
  align-self: center;
`

const Circle = styled.div`
  background: white;
  height: 280px;
  width: 280px;
  border-radius: 50%;
  margin: 20px;
`

const Image = styled.img`
  border-radius: 25px 25px 0px 0px;
  width: 100%;
`

const CardContent = styled.div`
  padding: 0px 8px 8px 8px;
`

const jobs = [
  {
    company: 'Vodafone',
    role: 'Software Engineer',
    dates: 'Aug 2022 - Present',
    image: "https://www.svetandroida.cz/media/2021/06/1x1/vodafone-nejlevnejsi-tarify-s-neomezenymi-daty-1-790x790.jpg",
    bulletPoints: [
      'Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers'
    ]
  },
  {
    company: 'giffgaff',
    role: 'Software Engineer',
    dates: 'Sept 2019 - June 2022',
    image: "https://images.easyfundraising.org.uk/retailer/cropped/logo-giffgaff-1546873593.jpg",
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
    startDate: 'Sept 2016',
    endDate: 'July 2019'
  },
  {
    school: 'Saint Mary\'s Catholic School',
    startDate: 'Sept 2014',
    endDate: 'July 2016'
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    height: '50%',
    border: 'none',
    borderRadius: '25px',
    // background: 'rgba(255, 255, 255, 0.54)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(9.5px)',
    webkitBackdropFilter: 'blur(9.5px)',   
  }
};

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
  height: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
`

const ContentContainer = styled.div`
  width: 55%;
  background-color: #c1e9ff;
  border-radius: 25px;
  padding: 16px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const MemojiContainer = styled.img`
  border-radius: 50%;
  height: 80%;
  aspect-ratio: 1 / 1;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Card = ({ title, subtitle, subsubtitle, action, actionText, image, width, background, children}: any) => (
  <CardContainer width={width} background={background}>
    {children ? children : (
      <>
       {image && <Image src={image} alt={title}/>}
        <CardContent>
          {title && <h3>{title}</h3>}
          {subtitle && <p style={{ marginBottom: 0 }}>{subtitle}</p>}
          {subsubtitle && <small style={{ color: 'grey', fontStyle: 'italic' }}>{subsubtitle}</small>}
        </CardContent>
        {action && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', bottom: 16, right: 16 }}>
            <StyledButton onClick={action}>{actionText}</StyledButton>
          </div>
        )}
      </>
    )}
  </CardContainer>
) 

const About = () => {

  
  return (
    <Page>

    </Page>
  )
}

export default About
