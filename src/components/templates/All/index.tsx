import React from 'react';
import Page from '../../atoms/Page';

import styled, { withTheme } from 'styled-components'
import Header from '../../atoms/Header';

import Manteca from '../../../assets/images/HarryManteca.jpg';
import Section from '../../atoms/Section';
import GridCard from '../../atoms/GridCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 90vw;
  box-sizing: border-box;
  margin: 16px 0;
  min-height: auto;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    width: 100vw;
  }

  @media screen and (max-width: 499px) {
    div {
      grid-column: span 2;
    }
  }
`

const Tile = styled.div`
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  min-height: 25vh;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${({ theme }) => theme.container };
  padding: 24px;
  align-items: center;
`

const Tiles = [
  <GridCard>
    <img src={Manteca} alt='Manteca' style={{ height: 'auto', width: '80%', alignSelf: 'center', borderRadius: '50%', }}/>
    <div style={{ margin: 24 }}>
      <div><strong>👨🏻‍💻 Age </strong> 25 </div>
      <div><strong>📍 Location </strong> London, UK </div>
    </div>
  </GridCard>,
  <GridCard>
    <h1>Software <br/> Engineer</h1>
    <p>I've been a Software Engineer for over 3 years, with a primary focus on front end development; though I prefer to think of myself as Full Stack.</p>
  </GridCard>,
  <GridCard>
    <h1>Team <br/> Player</h1>
    <p>A team is only as good as how they feel. Morale, team work, and psychological safety above all else.</p>
  </GridCard>,
  <GridCard>
    <h1>Forward <br/> Thinker</h1>
    <p>Today's code is either tomorrow's downfall or saviour. I believe in eradicating tech debt as soon as possible and thinking about the long-term impact of our choices.</p>
  </GridCard>
]

const All = (props: { theme?:any }) => (
  <Page>
    <Section>
      <h1>Hey, I'm Harry!</h1>
      <p>I'm a 25 year old software engineer based in London. <br/>I'm interested in roles that align with my values and come with a challenge. Here you'll find a bit about my work, and about me as a person.</p>
    </Section>

    <Header title='Who I am' bgColor='#e8b454' />
    
      <Grid>
        {Tiles.map((content, index) => content)}
      </Grid>
  </Page>
)

export default withTheme(All)
