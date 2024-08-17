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
    setCharacterInfoData: (state, action) => {
      const characterData = action.payload

      state.characters.forEach((character, index) => {
        if (character.id === characterData.id) {
          state.characters[index] = characterData
        }
      })
      saveArrayToLocalStorage('localCharsData', state.characters)
    }
  },
})

export const { setCharactersData, setCharacterInfoData } = charactersSlice.actions

export default charactersSlice.reducer