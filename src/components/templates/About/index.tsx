import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import Section from '../../atoms/Section'
import axios from 'axios'
import styled from 'styled-components'

interface SpotifyTrack {
  name: string
  artist: string
  imageUrl: string
  albumUrl?: string
}

const SpotifyCard = ({ name, artist, imageUrl }: SpotifyTrack) => {
  const Container = styled.div`
    width: 500px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;

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

const About = () => {
  const [spotifyLastPlayed, setSpotifyLastPlayed] = useState<SpotifyTrack | null>(null)

  const getSpotify = useCallback(() => {
    try {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_URL}/get-recently-played-song`
      }).then(res => {
        const { track } = res.data.items[0]
  
        setSpotifyLastPlayed({
          name: track.name,
          artist: track.album.artists[0].name,
          imageUrl: track.album.images[0].url,
          albumUrl: track.album.uri
        })
      })
    } catch (err) {
      console.log(err)
    }   
  }, [])

  useEffect(() => {
    getSpotify()
  }, [getSpotify])

  return (
    <Page>
      <Header title='About' />
      {spotifyLastPlayed &&  
        <Section bgColor='transparent'>
          <SpotifyCard name={spotifyLastPlayed.name} artist={spotifyLastPlayed.artist} imageUrl={spotifyLastPlayed.imageUrl} />
        </Section>
      }
      <Section>
        <div>
          <p>Coming soon...</p>
        </div>
      </Section>
    </Page>
  )
}

export default About
