import React from 'react';
import Page from '../../atoms/Page';

import styled from 'styled-components'

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

const All = () => {

  return (
    <Page>
      <Intro>
        <h1>Hey, I'm Harry!</h1>
        <div>
          <p>I'm a 24 year old software engineer based in London.</p>
          <p>I'm interested in roles that align with my values and come with a challenge. Here you'll find a bit about my work, and about me as a person.</p>
        </div>
      </Intro>

      <div style={{ minHeight: '25vh', width: '100%', backgroundColor: '#e8b454' }}>

      </div>
    </Page>
  )
}

export default All
