const express = require("express");
const cors = require("cors");
const qs = require('qs');
const { default: axios } = require("axios");

require('dotenv').config()

const { PORT, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN, SPOTIFY_REFRESH_TOKEN_URL, SPOTIFY_RECENTLY_PLAYED_URL } = process.env

const app = express();

const auth = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
  "binary"
).toString("base64");

const form = {
  grant_type: "refresh_token",
  refresh_token: SPOTIFY_REFRESH_TOKEN,
};

const headers = {
  "content-type": "application/x-www-form-urlencoded",
  Authorization: `Basic ${auth}`,
};

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

const getAccessToken = async () => {
  try {
    return await axios.post(SPOTIFY_REFRESH_TOKEN_URL, qs.stringify(form), { headers })
      .then(
      response => {
        return response.data.access_token
      }
    )
  } catch (err) {
    console.log(err)
    return;
  }
}

const getRecentlyPlayedSong = async (accessToken) => {  
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  try {
    return await axios.get(SPOTIFY_RECENTLY_PLAYED_URL, { headers })
      .then(res => {
        return res.data
      })
  } catch (err) {
    console.log(err.response.data.error)
    return
  }
}

app.get('/get-recently-played-song', async (req, res) => {
  let accessToken = await getAccessToken().then()
  let recentlyPlayedSong = await getRecentlyPlayedSong(accessToken)

  res.send(recentlyPlayedSong)
});

app.listen({ port: PORT }, () => {
  console.log(`🚀Server ready at http://localhost:${PORT}`);
});

