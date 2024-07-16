import { createSlice } from '@reduxjs/toolkit'
import { saveArrayToLocalStorage } from '../../helpers/string'

const initialState = {
  chars: [],
}

export const charactersSlice = createSlice({
  name: 'chars',
  initialState,
  reducers: {
    setCharactersData: (state, action) => {
      const charsData = action.payload
      
      saveArrayToLocalStorage('localCharsData', charsData)
      state.chars = charsData;
    },
  },
})

export const { setCharactersData } = charactersSlice.actions

export default charactersSlice.reducer