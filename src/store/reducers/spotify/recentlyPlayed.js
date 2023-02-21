import { createSlice } from '@reduxjs/toolkit'

export const recentlyPlayedSlice = createSlice({
  name: 'recentlyPlayed',
  initialState: {
    value: null,
  },
  reducers: {
    setTrack: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { setTrack } = recentlyPlayedSlice.actions

export default recentlyPlayedSlice.reducer