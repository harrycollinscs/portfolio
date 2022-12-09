import React from 'react';
import Page from '../../atoms/Page';
import styled from 'styled-components'
import Modal from 'react-modal'
import Grid from '../../atoms/Grid';
import Card from '../../atoms/Card';
import Linkedin from '../../../assets/images/LinkedIn.jpg'
import Github from '../../../assets/images/Github.png'
import Gmail from '../../../assets/images/Gmail.png'
import HarryCollins1 from '../../../assets/images/HarryCollins1.png'
import HarryNewYork from '../../../assets/images/HarryNewYork.png'
import HarryBridge from '../../../assets/images/HarryBridge.png'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [ HarryNewYork, HarryBridge, HarryCollins1 ];

const ImagesCard = ({ images }: any) => (
  <Card noPadding circle bgColor='transparent'>
    <Slide prevArrow={<></>} nextArrow={<></>} >
      {images.map((image: any, index: number)=> (
        <div  className="each-slide" key={index}>
          <img style={{ height: '100%', width: '100%', borderRadius: '50%'}} src={image} alt="sliding"/>
        </div>
      ))} 
    </Slide>
  </Card>
)

const openLink = (link: string) => {
  window.open(link, '_blank');
}

const All = () => {

  const Title = styled.h1`
    

    color: #efefef;
    -webkit-text-stroke: 0.5px #b0b0b0;
  `

  return (
    <Page>
      <Grid>
        <ImagesCard images={slideImages} />
        <Card />
        <Card tall>
          <h1 style={{ color: 'grey' }}>About me</h1>
        </Card>
        <Card />

        <Card long>
          <Title>Tech Stack</Title>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: 40 }}>
          

          </div>

        </Card>
        <Card />
        <Card />

        <Card bgImage={Linkedin} action={() => openLink('https://www.linkedin.com/in/harrycollinscs/')}/>
        <Card bgImage={Github} action={() => openLink('https://www.github.com/harrycollinscs/')} />
        <Card bgImage={Gmail} action={() => openLink('mailto:harrycol97@gmail.com')} />

      </Grid>
    </Page>
  )
}

export default All
