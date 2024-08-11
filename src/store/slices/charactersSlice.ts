import { createSlice } from '@reduxjs/toolkit'
import { saveArrayToLocalStorage } from '../../helpers/lib/localStorage.js'
import {ICharacterScheme} from '../../types/character.js'

const initialState: ICharacterScheme = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersData: (state, action) => {
      const charactersData = action.payload
      
      saveArrayToLocalStorage('localCharsData', charactersData)
      state.characters = charactersData;
    },
  },
})

export const { setCharactersData } = charactersSlice.actions

export default charactersSlice.reducer