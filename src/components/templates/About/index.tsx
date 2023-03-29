import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import axios from 'axios'
import styled, { withTheme } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setTrack } from '../../../store/reducers/spotify/recentlyPlayed'
import { setTopTracks } from '../../../store/reducers/spotify/topTracks'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-responsive-carousel'
import HarryEdinburgh from '../../../assets/images/travel/HarryEdinburgh.jpg'
import Venice from '../../../assets/images/travel/Venice.jpeg'
import TimesSquare from '../../../assets/images/travel/TimesSquare.jpeg'
import Budapest from '../../../assets/images/travel/Budapest.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


interface SpotifyTrack {
  name: string
  artist: string
  imageUrl: string
  albumUrl?: string
}

const SpotifyCard = ({ name, artist, imageUrl }: SpotifyTrack) => {
  const Container = styled.div`
    width: 100%;
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
      width: auto;
      height: 100%;
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
      width: 15vw;

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

  return (
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
}

const AlbumGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  min-height: auto;

  img {
    height: 80px;
    border-radius: 5%;
    margin: 5px;
  }
`

const AlbumsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 90vw;
  box-sizing: border-box;
  padding: 16px 0px;
  min-height: auto;

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Card = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.container};
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  min-height: 50vh;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Legend = styled.p`
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  background: #fff;
  border-radius: 10px;
  color: #000;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  opacity: 1;
`

const TravelSlides = [
  {
    image: HarryEdinburgh,
    label: 'Edinburgh',
  },
  {
    image: TimesSquare,
    label: 'New York',
  },
  {
    image: Budapest,
    label: 'Budapest',
  },
  {
    image: Venice,
    label: 'Venice',
  },
]

const About = (props: { theme?: any }) => {
  const dispatch = useDispatch()
  const track = useSelector((state: any) => state.recentlyPlayed.value)
  const topTracks = useSelector((state: any) => state.topTracks.value).slice(0, 10)

  const getSpotify = useCallback(() => {
    try {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_URL}/get-spotify-data`
      }).then(res => {
        const { track } = res.data.recentlyPlayed.items[0]
        const topArtists = res.data.topTracks.items

        dispatch(setTrack(
          {
            name: track.name,
            artist: track.album.artists[0].name,
            imageUrl: track.album.images[0].url,
            albumUrl: track.album.uri
          }
        ))

        dispatch(setTopTracks(topArtists))
      })
    } catch (err) {
      console.log(err)
    }   
  }, [dispatch])

  useEffect(() => {
    getSpotify()
  }, [getSpotify])

  return (
    <Page>
      <Header title='About' />
      <Grid>
        <Card>
          <h2>Music</h2>
          <p>I love rap & rnb, but basically every genre too. I actually got into coding when I heard a rapper mention Python in a freestyle. I've been casually learning piano as a hobby and would love to learn music production.</p>
          {track &&  
            <SpotifyCard name={track.name} artist={track.artist} imageUrl={track.imageUrl} />
          }
          {topTracks.length ? (
            <AlbumsContainer>
              <h3>Top albums right now</h3>
              <AlbumGrid>
              {
                topTracks?.map((track: any) => (
                  <img src={track.album.images[0].url} alt='images of top tracks'/>
                ))
              }
              </AlbumGrid>
            </AlbumsContainer>
          ) : null}
          
        </Card>
        <Card>
          <h2>Travel</h2>
          <div style={{ maxWidth: '50vh' }}>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
              {
                TravelSlides.map(slide => (
                  <> 
                    <img src={slide.image} alt={slide.label}/>
                    <Legend className="">{slide.label}</Legend>
                  </>
                ))
              }
            </Carousel>
          </div>
          <p>📍 Trying to see as many new places as possible. <br/>Next on the list: Amsterdam, Barcelona, Iceland, Japan</p>
        </Card>
        <Card>
          <h2>Sport</h2>
          <p>I'm a regular at the gym, going between 3-6 times per week 🏋🏻. I try to keep myself active and healthy, and its a big part of my life.</p>
          <p>Another one of my interests is basketball 🏀 I support both the London Lions (my local team), and the Brooklyn Nets.</p>
        </Card>
      </Grid>
    </Page>
  )
}

export default withTheme(About)
