import React, { useCallback, useEffect } from 'react'
import Header from '../../atoms/Header'
import Page from '../../atoms/Page'
import Section from '../../atoms/Section'
// import { Buffer } from 'buffer'

interface SpotifyTrack {
  name: string
  artist: string
  imageUrl: string
  albumUrl: string
}

const About = () => {
  // const [spotifyLastPlayed, setSpotifyLastPlayed] = useState<SpotifyTrack | null>(null)

  const getSpotify = useCallback(() => {

    // axios({
    //   method: 'get',
    //   url: 'https://localhost:3001/spotify-login'
    // })

    // axios({
    //   method: 'post',
    //   url: 'https://accounts.spotify.com/api/token',
    //   headers: {
    //     'Authorization': 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
    //   },
    // }).then(res => {
    //   console.log(res)
    // })

    // axios({
    //   method: 'get',
    //   url: 'https://api.spotify.com/v1/me/player/recently-played',
    //   headers: {
    //     'Authorization': `Bearer BQBZrijEFVxMxQCEZTkYZcP86ij2zZ5gcaDwyyXpBFa06fbFJtaPd4CphfxEz6Nrw5wa4SjXGea_Hw-6Q6aVAkqAqDG6MkbWnpUQWHD_prU_rUYTdxt4wtYXn0CpVPIF2ebiUGORIGWNisGAQLnSaYd2gIkgT1vDI7Qcj1nN37uphzd9KvA_Uw`,
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // })
    //   .then((res: any) => {
    //     const { name, album, artists } = res.data.items[0].track
    //     setSpotifyLastPlayed({
    //       name,
    //       artist: artists[0].name,
    //       imageUrl: album.images[0].url,
    //       albumUrl: album.uri,
    //     })
    //   });
  }, [])

  useEffect(() => {
    getSpotify()
  }, [getSpotify])

  return (
    <Page>
      <Header title='About' />
      {/* <Section>
        <div style={{ width: 400, height: 100, border: '1px solid grey', borderRadius: 5, display: 'flex', flexDirection: 'row' }}>
          <img src={spotifyLastPlayed?.imageUrl} style={{ width: 20, height:20}} alt='spotify artist' />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>{spotifyLastPlayed?.name}<br/>
            {spotifyLastPlayed?.artist}</p>
          </div>

        </div>
      </Section> */}
      <Section>
        <div>
          <p>Coming soon...</p>
        </div>
      </Section>
    </Page>
  )
}

export default About
