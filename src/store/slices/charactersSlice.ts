import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEYS, saveArrayToLocalStorage } from '../../helpers/lib/localStorage.js'
import {ICharacter, ICharacterScheme} from '../../types/characterTypes.js'

const initialState: ICharacterScheme = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersData: (state, action: PayloadAction<ICharacter[]>) => {
      const charactersData = action.payload
      
      saveArrayToLocalStorage(LOCAL_STORAGE_KEYS.CHARS, charactersData)
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
      saveArrayToLocalStorage(LOCAL_STORAGE_KEYS.CHARS, characters)
    }
  },
})

export const { setCharactersData, setCharacterInfoData } = charactersSlice.actions

export default charactersSlice.reducer