import React from 'react'
import { Slide } from 'react-slideshow-image'
import Card from '../../atoms/Card'
import styled from 'styled-components'

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  pointer-events: none;
`

const ImagesCard = ({ images }: any) => (
  <Card noPadding circle bgColor='transparent'>
    <Slide prevArrow={<></>} nextArrow={<></>} transitionDuration={500}>
      {images?.map((image: any, index: number)=> (
        <div className="each-slide" key={index}>
          <Image src={image} alt="sliding"/>
        </div>
      ))} 
    </Slide>
  </Card>
)

export default ImagesCard