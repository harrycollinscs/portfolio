import React from 'react';
import styled, { withTheme } from 'styled-components'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SpotifyTrack {
  name: string
  artist: string
  imageUrl: string
  albumUrl?: string
  theme?: any
}

const Container = styled.div`
  width: auto;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.body};
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  margin: 24px 0px;

  img {
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  text-align: start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    margin: 0;
    margin: 0 0 10px 0;
    line-height: 1;  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 10vw;

    @media screen and (max-width: 899px) {
      width: 30vw;
    }  

  }

  p {
    margin: 0;
    line-height: 1;
  }
`

const AudioAnimation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 16px;
  height: 16px;

  @keyframes bounce {
    0% {
      transform: scaleY(0.3);
    }

    25% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0.5);
    }

    75% {
      transform: scaleY(0.75);
    }

    100% {
      transform: scaleY(0.6);
    }
  }

  span {
    width: 4px;
    height: 100%;
    background-color: #2ad45e;
    border-radius: 3px;
    transform-origin: bottom;
    animation: bounce 2.2s ease infinite alternate;
    content: '';

    &:nth-of-type(2) {
      animation-delay: -2.2s; /* Start at the end of animation */
    }

    &:nth-of-type(3) {
      animation-delay: -3.7s; /* Start mid-way of return of animation */
    }
  }
`

const AudioColumn = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
  display: none;
  }
`


const SpotifyNowPlaying = ({ name, artist, imageUrl }: SpotifyTrack) => (
  <Container>
    <img src={imageUrl} alt='spotify artist' />
    <TextContainer>
      <p>Now playing</p>
      <div>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </TextContainer>
    <AudioColumn>
      <FontAwesomeIcon icon={faSpotify} color='#2ad45e' size='2x'/>
      <AudioAnimation>
        <span /><span /><span />
      </AudioAnimation>
    </AudioColumn>
  </Container>
)

export default withTheme(SpotifyNowPlaying)