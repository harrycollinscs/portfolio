import React from 'react';
import Page from '../../atoms/Page';

import styled from 'styled-components'
import Header from '../../atoms/Header';

import Manteca from '../../../assets/images/HarryManteca.jpg';
import Section from '../../atoms/Section';

// const AboutMe = [
//   {
//     title: '👨🏻‍💻 Age',
//     list: ['24'],
//   },
//   {
//     title: '📍 Location',
//     list: ['London, UK'],
//   },
//   {
//     title: '⛹🏻‍♂️ Interests',
//     list: ['Music', 'Basketball', 'Travelling', 'Fitness', 'Food (Pasta)'],
//   }
// ]

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 80vw;
  box-sizing: border-box;
  padding: 24px;
  min-height: auto;

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);

    div:nth-child(5) {
      grid-row: 1;
      grid-column: 2;
    }

    div:nth-child(6) {
      grid-row: 2;
    }

    div:nth-child(4) {
      grid-row: 4;
      grid-column: 2;
    }
  }

  @media screen and (max-width: 499px) {

    div {
      grid-column: span 2;
    }

    div:nth-child(1) {
      grid-row: 1;
      grid-column: span 2;
    }

    div:nth-child(3) {
      grid-row: 4;
      grid-column: span 2;
    }

    div:nth-child(2) {
      grid-row: 2;
      grid-column: span 2;
    }

    div:nth-child(5) {
      grid-row: 8;
      grid-column: span 2;
      visible: false;
    }

    div:nth-child(4) {
      grid-row: 6;
      grid-column: span 2;

    }

    div:nth-child(6) {
      grid-row: 3;
      grid-column: span 2;

    }

    div:nth-child(7) {
      grid-row: 5;
      grid-column: span 2;

    }

    div:nth-child(8) {
      grid-row: 7;
      grid-column: span 2;
    }
  }
`

const Tiles = [
  <img src={Manteca} alt='Manteca' style={{ height: 'auto', width: '100%', borderRadius: '50%', }}/>,
  <h1>Software <br/> Engineer</h1>,
  <h1>Team <br/> Player</h1>,
  <h1>Foward <br/> Thinker</h1>,
  <p>^ That's me ^</p>,
  <p>I've been a Software Engineer for over 3 years, with a primary focus on front end development; though I prefer to think of myself as Full Stack.</p>,
  <p>A team is only as good as how they feel. Morale, team work, and psychological safety above all else.</p>,
  <p>Today's code is either tomorrow's downfall or saviour. I believe in eradicating tech debt as soon as possible and thinking about the long-term impact of our choices</p>,
]

const All = () => {

  return (
    <Page>
      <Section>
        <h1>Hey, I'm Harry!</h1>
        <div>
          <p>I'm a 24 year old software engineer based in London. <br/>I'm interested in roles that align with my values and come with a challenge. Here you'll find a bit about my work, and about me as a person.</p>
        </div>
      </Section>

      <Header title='Who I am' bgColor='#e8b454' />
      
      <Section>
        <Grid>
          {
            Tiles.map((content, index) => (
              <div key={index} style={{  lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '25vh', padding: '8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {content}
              </div>
            ))
          }
        </Grid>
      </Section>
    </Page>
  )
}

export default All
