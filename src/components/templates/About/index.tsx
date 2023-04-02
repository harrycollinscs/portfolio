import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import axios from 'axios'
import styled, { withTheme } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setTrack } from '../../../store/reducers/spotify/recentlyPlayed'
import { setTopTracks } from '../../../store/reducers/spotify/topTracks'
import { Carousel } from 'react-responsive-carousel'
import HarryEdinburgh from '../../../assets/images/travel/HarryEdinburgh.jpg'
import Venice from '../../../assets/images/travel/Venice.jpeg'
import TimesSquare from '../../../assets/images/travel/TimesSquare.jpeg'
import Budapest from '../../../assets/images/travel/Budapest.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GridCard from '../../atoms/GridCard'
import Grid from '../../atoms/Grid'
import SpotifyNowPlaying from '../../molecules/SpotifyNowPlaying'

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
  const topTracks = useSelector((state: any) => state.topTracks.value).slice(0, 5)

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
      <Header title='About' bgColor={props.theme.body}/>
      <Grid columns={{ desktop: 3, tablet: 2, smallTablet: 1, mobile: 1, smallMobile: 1 }}>
        <GridCard>
          <h2>Music</h2>
          <p>I love rap & rnb, but basically every genre too. I actually got into coding when I heard a rapper mention Python in a freestyle. I've been casually learning piano as a hobby and would love to learn music production.</p>
          {track &&  
            <SpotifyNowPlaying name={track.name} artist={track.artist} imageUrl={track.imageUrl} />
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
          
        </GridCard>

        <GridCard>
          <h2>Travel</h2>
          <div style={{ maxWidth: '90%', alignSelf: 'center' }}>
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
        </GridCard>

        <GridCard>
          <h2>Sport</h2>
          <p>I'm a regular at the gym, going between 3-6 times per week 🏋🏻. I try to keep myself active and healthy, and its a big part of my life.</p>
          <p>Another one of my interests is basketball 🏀 I support both the London Lions (my local team), and the Brooklyn Nets.</p>
        </GridCard>
        
      </Grid>
    </Page>
  )
}

export default withTheme(About)
