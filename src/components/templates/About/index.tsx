import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import Section from '../../atoms/Section'
import axios from 'axios'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setTrack } from '../../../store/reducers/spotify/recentlyPlayed'
import { setTopTracks } from '../../../store/reducers/spotify/topTracks'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

  return (
    <Page>
      <Header title='About' />
      <Grid>
        <div key={1} style={{ alignItems: 'center', backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <h2>Music</h2>
          <p>I love rap & rnb, but basically every genre too. I actually got into coding when I heard a rapper mention Python in a freestyle. I've been casually learning piano as a hobby and would love to learn music production.</p>
          {track &&  
            <SpotifyCard name={track.name} artist={track.artist} imageUrl={track.imageUrl} />
          }
          {topTracks.length ? (
            <div style={{ width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3>Top albums right now</h3>
              <AlbumGrid>
              {
                topTracks?.map((track: any) => (
                  <div>
                  <img src={track.album.images[0].url} style={{ height: 80, borderRadius: '5%', margin: '5px' }} alt='images of top tracks'/>
                  </div>
                ))
              }
              </AlbumGrid>
            </div>
          ) : null}
          
        </div>
        <div key={2} style={{ backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h2>Travel</h2>
        </div>
        <div key={3} style={{  backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h2>Sport</h2>
        </div>
      </Grid>
      <Section>
        <div>
          <p>Coming soon...</p>
        </div>
      </Section>
    </Page>
  )
}

export default About
