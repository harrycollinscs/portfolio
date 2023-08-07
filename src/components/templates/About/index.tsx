import React, { useCallback, useEffect } from "react";
import Header from "../../atoms/Header";
import Page from "../../atoms/Page";
import axios from "axios";
import styled, { css, withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setTrack } from "../../../store/reducers/spotify/recentlyPlayed";
import { setTopTracks } from "../../../store/reducers/spotify/topTracks";
import { Carousel } from "react-responsive-carousel";
import HarryEdinburgh from "../../../assets/images/travel/HarryEdinburgh.jpg";
import Venice from "../../../assets/images/travel/Venice.jpeg";
import TimesSquare from "../../../assets/images/travel/TimesSquare.jpeg";
import Budapest from "../../../assets/images/travel/Budapest.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Grid from "../../atoms/Grid";
import SpotifyNowPlaying from "../../molecules/SpotifyNowPlaying";
import Section from "../../atoms/Section";

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
`;

const AlbumsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArticle = styled.article<{ left?: boolean }>`
  ${({ left }) =>
    left
      ? `
    margin-left: 48px;
    text-align: right;
  `
      : `
    margin-right: 48px;
    text-align: left;
  `}

  @media screen and (max-width: 1100px) {
    text-align: left;
    margin: 0;
  }
`;

const ImageArticle = styled.article<{ image?: any; left?: boolean }>`
  display: flex;
  min-height: 50vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ image }) => image && `url(${image});`}

  @media screen and (max-width: 1100px) {
    order: 1;
    background: none;
    background-image: ${({ image }) => image && `url(${image});`}
    background-size: cover;
  }

  ${({ image }) =>
    image &&
    css`
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${image});

      @media screen and (max-width: 1100px) {
        order: 1;
        background: none;
        background-image: url(${image});
        background-size: cover;
      }
    `}

  @media screen and (max-width: 1100px) {
    order: 1;
  }
`;

const TravelSlides = [
  {
    image: HarryEdinburgh,
    label: "Edinburgh",
  },
  {
    image: TimesSquare,
    label: "New York",
  },
  {
    image: Budapest,
    label: "Budapest",
  },
  {
    image: Venice,
    label: "Venice",
  },
];

const About = ({ theme }: { theme?: any }) => {
  const dispatch = useDispatch();
  const track = useSelector((state: any) => state.recentlyPlayed.value);
  const topTracks = useSelector((state: any) => state.topTracks.value).slice(
    0,
    5
  );

  const getSpotify = useCallback(() => {
    try {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_SERVER_URL}/get-spotify-data`,
      }).then((res) => {
        const { track } = res.data.recentlyPlayed.items[0];
        const topArtists = res.data.topTracks.items;

        dispatch(
          setTrack({
            name: track.name,
            artist: track.album.artists[0].name,
            imageUrl: track.album.images[0].url,
            albumUrl: track.album.uri,
          })
        );

        dispatch(setTopTracks(topArtists));
      });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    getSpotify();
  }, [getSpotify]);

  return (
    <Page>
      {/* <Header title='About' bgColor={theme.primary}/> */}
      <Header title="About" bgColor={theme.body} />

      <Section fullWidth bgColor={theme.secondary}>
        <Section>
          <Grid
            columns={{
              desktop: 2,
              tablet: 2,
              smallTablet: 1,
              mobile: 1,
              smallMobile: 1,
            }}
          >
            <ImageArticle left>
              <div>
                {track && (
                  <SpotifyNowPlaying
                    name={track.name}
                    artist={track.artist}
                    imageUrl={track.imageUrl}
                  />
                )}
                {topTracks.length ? (
                  <AlbumsContainer>
                    <h3>Top albums right now</h3>
                    <AlbumGrid>
                      {topTracks?.map((track: any) => (
                        <img
                          src={track.album.images[0].url}
                          alt="images of top tracks"
                        />
                      ))}
                    </AlbumGrid>
                  </AlbumsContainer>
                ) : null}
              </div>
            </ImageArticle>

            <TextArticle>
              <h1
                style={{
                  textDecorationStyle: "wavy",
                  textDecorationLine: "underline",
                  color: theme.accent,
                  paddingBottom: 20,
                  textUnderlineOffset: 20,
                  textDecorationThickness: 6,
                }}
              >
                Music
              </h1>
              <p>
                I love rap & rnb, but basically every genre too. I actually got
                into coding when I heard a rapper mention Python in a freestyle.
                I've been casually learning piano as a hobby and would love to
                learn music production.
              </p>
            </TextArticle>
          </Grid>
        </Section>
      </Section>

      <Section>
        <Grid
          columns={{
            desktop: 2,
            tablet: 2,
            smallTablet: 1,
            mobile: 1,
            smallMobile: 1,
          }}
        >
          {/* <div style={{ display: 'flex', }}> */}
          <article>
            <h1
              style={{
                textDecorationStyle: "wavy",
                textDecorationLine: "underline",
                color: theme.accent,
                paddingBottom: 20,
                textUnderlineOffset: 20,
                textDecorationThickness: 6,
              }}
            >
              Travel
            </h1>
            <p>
              📍 Trying to see as many new places as possible. <br />
              Next on the list: Amsterdam, Barcelona, Iceland, Japan
            </p>
          </article>
          <div>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
            >
              {TravelSlides.map((slide) => (
                <img src={slide.image} alt={slide.label} />
              ))}
            </Carousel>
          </div>
          {/* </div> */}
        </Grid>
      </Section>

      <Section bgColor={theme.secondary} fullWidth>
        <Section>
          <article style={{}}>
            <h1
              style={{
                textDecorationStyle: "wavy",
                textDecorationLine: "underline",
                color: theme.accent,
                paddingBottom: 20,
                textUnderlineOffset: 20,
                textDecorationThickness: 6,
              }}
            >
              Sport
            </h1>
            <div>
              <p>
                I've recently got into running 🏃🏻‍♂️, and will be taking part in
                the Hackney Half Marathon 2024.
              </p>
              <p>
                I'm a regular at the gym, going between 3-6 times per week 🏋🏻. I
                try to keep myself active and healthy, and its a big part of my
                life.
              </p>
              <p>
                Another one of my interests is basketball 🏀 I support both the
                London Lions (my local team), and the Brooklyn Nets.
              </p>
            </div>
          </article>
        </Section>
      </Section>
    </Page>
  );
};

export default withTheme(About);
