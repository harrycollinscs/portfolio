import React from 'react';
import Page from '../../atoms/Page';
import Grid from '../../atoms/Grid';
import Card from '../../atoms/Card';
import Linkedin from '../../../assets/images/LinkedIn.jpg'
import Github from '../../../assets/images/Github.png'
import Gmail from '../../../assets/images/Gmail.png'
import HarryCollins1 from '../../../assets/images/HarryCollins1.png'
import HarryNewYork from '../../../assets/images/HarryNewYork.png'
import HarryBridge from '../../../assets/images/HarryBridge.png'

import 'react-slideshow-image/dist/styles.css'
import ImagesCard from '../../molecules/ImagesCard';
import ResumeCard from '../../molecules/ResumeCard';
import TitleCard from '../../molecules/TitleCard';

const slideImages = [ HarryNewYork, HarryBridge, HarryCollins1 ];

const openLink = (link: string) => {
  window.open(link, '_blank');
}

const AboutMe = [
  {
    title: '',
    list: ["Hey, I'm Harry. I'm a London based Software Engineer "],
  },
  {
    title: 'Age',
    list: ['24'],
  },
  {
    title: 'Location',
    list: ['London, UK'],
  },
  {
    title: 'Interests',
    list: ['Music', 'Basketball', 'Travelling', 'Fitness', 'Food (Pasta)'],
  }
]

const All = () => {

  return (
    <Page>
      <Grid>
        <ImagesCard images={slideImages} />
        <TitleCard title='HARRY COLLINS' bgColor='#2b2c2e' color='#bfbfbf' />

        <ResumeCard subtitle='' subsubtitle='' lists={AboutMe} isTall />
        <Card long />
        <Card />
        <Card />
        <Card long />
       

        <Card bgImage={Linkedin} action={() => openLink('https://www.linkedin.com/in/harrycollinscs/')}/>
        <Card bgImage={Github} action={() => openLink('https://www.github.com/harrycollinscs/')} />
        <Card bgImage={Gmail} action={() => openLink('mailto:harrycol97@gmail.com')} />

      </Grid>
    </Page>
  )
}

export default All
