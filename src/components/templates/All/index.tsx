import React from 'react';
import Page from '../../atoms/Page';

import { withTheme } from 'styled-components'
import Header from '../../atoms/Header';

import Manteca from '../../../assets/images/HarryManteca.jpg';
import Section from '../../atoms/Section';
import GridCard from '../../atoms/GridCard';
import Grid from '../../atoms/Grid';

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
    <p>A team is only as good as how they feel. Morale, team work, and psychological safety come first. Something great can be the by-product of having fun with it.</p>
  </GridCard>,
  <GridCard>
    <h1>Forward <br/> Thinker</h1>
    <p>What we do today can make or break tomorrow. I believe in taking take to plan ahead and think about the long-term impact of our choices. Creating something good isn't easy.</p>
  </GridCard>
]

const All = (props: { theme?:any }) => (
  <Page>
    <Header title='Who I am' bgColor={props.theme.body} />

    <Section>
      <h1>Hey, I'm Harry!</h1>
      <p>I'm a 25 year old software engineer based in London. <br/>I'm interested in roles that align with my values and come with a challenge. Here you'll find a bit about my work, and about me as a person.</p>
    </Section>

    <Grid columns={{ desktop: 4, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}>
      {Tiles.map((content, index) => content)}
    </Grid>

    <Section bgColor={props.theme.body}/>
  </Page>
)

export default withTheme(All)
