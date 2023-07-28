import React from 'react';
import Page from '../../atoms/Page';

import styled, { withTheme } from 'styled-components'

import Manteca from '../../../assets/images/HarryManteca.jpg';
import Section from '../../atoms/Section';
import GridCard from '../../atoms/GridCard';
import Grid from '../../atoms/Grid';
import Button from '../../atoms/Button';

const Tiles = [
  <GridCard bgColor='#f7f7f7' raisedCard>
    <h1>Software <br/> Engineer</h1>
    <p>I've been a Software Engineer for over 3 years, with a primary focus on front end development; though I prefer to think of myself as Full Stack.</p>
  </GridCard>,
  <GridCard bgColor='#f7f7f7' raisedCard>
    <h1>Team <br/> Player</h1>
    <p>A team is only as good as how they feel. Morale, team work, and psychological safety come first. Something great can be the by-product of having fun with it.</p>
  </GridCard>,
  <GridCard bgColor='#f7f7f7' raisedCard>
    <h1>Forward <br/> Thinker</h1>
    <p>What we do today can make or break tomorrow. I believe in taking take to plan ahead and think about the long-term impact of our choices. Creating something good isn't easy.</p>
  </GridCard>
]

const IntroArticle = styled.article`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: start;

  @media screen and (max-width: 700px) {
    a {
      align-self: center;
    }
    order: 2;
  }
  `

const ImageArticle = styled.article`
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: end;

  @media screen and (max-width: 700px) {
    align-items: center;
    order: 1;
  }
`

const All = ({ theme }: { theme?:any }) => (
  <Page>
    <Section>
      <Grid columns={{ desktop: 2, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}>
        <IntroArticle>
          <h1>Hey, I'm Harry!</h1>
          <p>I'm a 25 year old software engineer based in London. <br/>I'm interested in roles that align with my values and come with a challenge. <br/>Here you'll find a bit about my work, and about me as a person.</p>
          <br/>
          <Button text='Contact me' href='#footer'/>
        </IntroArticle>
        <ImageArticle>
          <img src={Manteca} alt='Manteca' style={{ height: 'auto', width: '70%', borderRadius: '50%', marginTop: 20, marginBottom: 20 }}/>
        </ImageArticle>
      </Grid>
    </Section>

    <Section bgColor={theme.secondary} fullWidth>
      <Section>
        <article>
          <h1 style={{ textDecorationStyle: 'wavy', textDecorationLine: 'underline', color: theme.accent, paddingBottom: 20, textUnderlineOffset: 20, textDecorationThickness: 6 }}>
            What I Bring
          </h1>
        </article>
      </Section>
    </Section>

    <Section>
      <Grid columns={{ desktop: 3, tablet: 2, smallTablet: 2, mobile: 1, smallMobile: 1 }}>
        {Tiles.map((content, index) => content)}
      </Grid>
    </Section>

  </Page>
)

export default withTheme(All)
