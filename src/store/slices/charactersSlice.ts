import { createSlice } from '@reduxjs/toolkit'
import { saveArrayToLocalStorage } from '../../helpers/lib/localStorage.js'
import {IChar, ICharacterScheme} from '../../interfaces/iChar.js'

const initialState: ICharacterScheme = {
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