import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import axios from 'axios'
import styled from 'styled-components'
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
    background-color: #efefef;
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
      <div style={{ width: 'auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faSpotify} color='#2ad45e' size='2x'/>
        <AudioAnimation>
          <span /><span /><span />
        </AudioAnimation>
      </div>
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
  background-color: white;
  line-height: 2;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  min-height: 50vh;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start'
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

const About = () => {
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
      label: 'Budaest',
    },
    {
      image: Venice,
      label: 'Venice',
    },
  ]

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
          <p>📍 Trying to see as many new places as possible. <br/>Next on the list: Amsterdam, Barcelona, Iceland, Japan</p>
        </Card>
        <Card>
          <h2>Sport</h2>
        </Card>
      </Grid>
    </Page>
  )
}

export default About
