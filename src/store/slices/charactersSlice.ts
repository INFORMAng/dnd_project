import {ActionCreatorWithPayload, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { saveArrayToLocalStorage } from '../../helpers/lib/localStorage.js'
import {ICharacter, ICharacterScheme} from '../../types/character.js'

const initialState: ICharacterScheme = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersData: (state, action: PayloadAction<ICharacter[]>) => {
      const charactersData = action.payload
      
      saveArrayToLocalStorage('localCharsData', charactersData)
      state.characters = charactersData;
    },
    setCharacterInfoData: (state, action: PayloadAction<ICharacter>) => {
      const characterData = action.payload
      const characters = state.characters

      characters.forEach((character, index) => {
        if (character.id === characterData.id) {
          characters[index] = characterData
        }
      })
      saveArrayToLocalStorage('localCharsData', characters)
    }
  },
})

export const { setCharactersData, setCharacterInfoData } = charactersSlice.actions

export default charactersSlice.reducer