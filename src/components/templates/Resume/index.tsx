import React from 'react';
import Page from '../../atoms/Page';
import 'react-slideshow-image/dist/styles.css'

import Vodafone from '../../../assets/images/Vodafone.jpeg'
import giffgaff from '../../../assets/images/giffgaff.jpg'

import styled from 'styled-components'

// const jobs = [
//   {
//     company: 'Vodafone',
//     role: 'Software Engineer',
//     dates: 'Aug 2022 - Present',
//     image: "https://i.pinimg.com/originals/b4/5c/73/b45c73344e728b81ceae1c7b539b75e5.png",
//     products: ["Upgrades & Offers"],
//     stack: ['React', 'Typescript', 'HTML'],
//     bulletPoints: [
//       'Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers'
//     ]
//   },
//   {
//     company: 'giffgaff',
//     role: 'Software Engineer',
//     dates: 'Sept 2019 - June 2022',
//     image: "https://images.easyfundraising.org.uk/retailer/cropped/logo-giffgaff-1546873593.jpg",
//     products: ["FE Core/Community", "Mobile Apps"],
//     stack: ["React/Native", "Javascript/NodeJS"],
//     bulletPoints: [
//       'Led implementation of  ‘Help and Search’ section into giffgaff mobile application, featuring live chat (React Native, Typescript, Redux, GraphQL).',
//       'Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).',
//       'Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).',
//       'Developed Flarum platform extensions for Community platform (Javascript/Mithril, PHP).',
//       'Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.'
//     ]
//   }
// ];

// const education = [
//   {
//     school: 'Loughborough University',
//     qualification: 'BSc Computer Science',
//     dates: 'Sept 2016 - July 2019',
//   },
//   {
//     school: 'St. Mary\'s Sixth Form',
//     qualification: 'A-Level',
//     dates: 'Sept 2014 - July 2016',
//   },
// ]

// const loughboroughImages = [ Grad1, Grad2, Grad3 ];

// const skills = ['Javascript • Typescript', 'React • React Native', 'HTML • CSS', 'NodeJS', 'GraphQL', 'UX Mindset', 'Communication', 'Determination', 'Empathy']

const Image = styled.img`
  max-height: 50vh;
  max-width: 50vw;
  height: 100%;
  width: auto;

  @media screen and (max-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
`

const ImageSection = styled.div`
  width: 80vw;
  align-items: center;
  display: flex;
  justify-content: space-between;
  line-height: 2;
  align-items: flex-start;

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
  }
`

const ImageSectionContent = styled.div`
  padding: 24px;

  @media screen and (min-width: 700px) {
    &:nth-child(1) {
      padding-left: 8px;
    }
  
    &:nth-child(2) {
      padding-right: 8px;
    }
  }

  width: 100%
  height: 100%;
  box-sizing: border-box;

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

const Header = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #2f295e;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 40px;
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

  @media screen and (min-width: 2000px) {
    width: 60vw;
  }
`

const Resume = () => {
  return (
    <Page>
      <Header>
        <h1>Resume</h1>
      </Header>

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
            <li>Built and deployed custom React components, resuable helper functions, etc.</li>
            <li>Liased with backend engineers to formaulat data structures for efficient cross-stack data handling.</li>
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
            <li>Designed architecture and led project to overhaul front end notification handling to be more reusable, and increase development speed of engineers.</li>
            <li>Led implementation of ‘Help and Search’ section into giffgaff mobile application, featuring live chat (React Native,Typescript, Redux, GraphQL).</li>
            <li>Built and monitored NodeJS service to serve React components, utilising Hypernova (Javascript).</li>
            <li>Assisted in the building, improvement and technology-wide uptake of React component library (including Jest unit testing, Storybook).</li>
            <li>Communicated with and managed expectations of stakeholders while working in agile environment, and delivering iterative improvements to products.</li>
          </ul>
        </ImageSectionContent>
        <Image src={giffgaff} alt='giffgaff'/>
      </ImageSection>
    </Page>
  )
}

export default Resume

// <Grid>
//         <Card noPadding>
//           <div style={{ backgroundImage: `url(${Speechmark})`, width: '100%', height: '50%', backgroundSize: '100%', borderRadius: '0.25rem 0.25rem 0 0' }}/>
//           <div>
//             <h2>Vodafone</h2>
//             <p>Software Engineer </p>
//           </div>
//         </Card>
//         <Card long />
//         <Card noPadding>
//           <div style={{ backgroundImage: `url(${Speechmark})`, width: '100%', height: '50%', backgroundSize: '100%', borderRadius: '0.25rem 0.25rem 0 0' }}/>
//           <div>
//             <h2>Vodafone</h2>
//             <p>Software Engineer </p>
//           </div>
//         </Card>
//         <Card long />
//         <TitleCard title='EMPLOYMENT' bgColor='#003666' color='#c1e9ff' />

//         {/* <Card bgColor="#d6f5ff" long>
//           <ContentAndImage> 
//             <MemojiContainer src={Memoji} alt=""/>
//             <ContentContainer>
//               <p>Driven software engineer with 3 years of professional experience in software development. Focus in web and mobile app development.</p>
//             </ContentContainer>
//           </ContentAndImage>
//         </Card> */}

//         {jobs.map(job => (
//           <ResumeCard title={job.company} subtitle={job.role} subsubtitle={job.dates} lists={[{title: 'Stack', list: job.stack}, {title: 'Products', list: job.products }]} action={() => setModalContent(job)} isTall />
//         ))}

//         <TitleCard title='EDUCATION' bgColor='#fbb347' color='#ffedb3' />

//         {education.map(education => (
//           <ResumeCard title={education.school} subtitle={education.qualification} subsubtitle={education.dates} action={() => setModalContent(education)} isTall />
//         ))}

//         <ImagesCard images={loughboroughImages} />

        
//         <ListCard title='SKILLS' listItems={skills} bgColor='#3b3a67' titleColor='#8984bd' />

//         <Card />
//       </Grid>