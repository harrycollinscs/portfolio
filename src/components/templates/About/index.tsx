import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import Section from '../../atoms/Section'
import axios from 'axios'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setTrack } from '../../../store/reducers/spotify/recentlyPlayed'

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
    // box-shadow: 0 5px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    img {
      width: auto;
      height: 80%;
      border-radius: 10px;
      margin-left: 16px;
    }
  `

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    text-align: start;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;

    h3 {
      font-weight: bold;
      margin: 0;
      line-height: 1;
    }

    p {
      margin: 0;
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
  </Container>
  )
}

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

  const getSpotify = useCallback(() => {
    try {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_URL}/get-recently-played-song`
      }).then(res => {
        const { track } = res.data.items[0]

        dispatch(setTrack(
          {
            name: track.name,
            artist: track.album.artists[0].name,
            imageUrl: track.album.images[0].url,
            albumUrl: track.album.uri
          }
        ))

      })
    } catch (err) {
      console.log(err)
    }   
  }, [dispatch])

  // todo: add a carousel thing of most played aritsts or albums?
  useEffect(() => {
    getSpotify()
  }, [getSpotify])

  return (
    <Page>
      <Header title='About' />
      {/* Music section */}
      <Grid>
        <div key={1} style={{ alignItems: 'center', backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <h2>Music</h2>
          <p>Music is probably the one thing I couldn't live without. I've been casually learning piano as a hobby and would love to learn music production.</p>
          {track &&  
            <SpotifyCard name={track.name} artist={track.artist} imageUrl={track.imageUrl} />
          }
        </div>
        <div key={1} style={{ backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h2>Travel</h2>
        </div>
        <div key={1} style={{  backgroundColor: 'white', lineHeight: 2, textAlign: 'center', width: '100%', borderRadius: '5px', minHeight: '50vh', padding: '8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
