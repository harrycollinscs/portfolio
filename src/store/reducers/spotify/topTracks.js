import { createSlice } from '@reduxjs/toolkit'

export const topTracksSlice = createSlice({
  name: 'topTracks',
  initialState: {
    value: [],
  },
  reducers: {
    setTopTracks: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { setTopTracks } = topTracksSlice.actions

export default topTracksSlice.reducer