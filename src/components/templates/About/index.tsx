import React from 'react';
import Card from '../../atoms/Card';
import Grid from '../../atoms/Grid';
import Page from '../../atoms/Page';
import TitleCard from '../../molecules/TitleCard';

const About = () => {

  return (
    <Page>
      <Grid>
        <TitleCard title='ABOUT' bgColor='#003666' color='#c1e9ff' />
      </Grid>
    </Page>
  )
}

export default About
