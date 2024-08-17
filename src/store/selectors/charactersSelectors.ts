import { ICharacterInfo, itemCount } from './../../types/character';
import { StateSchema } from './../config/stateSchema';
import {ICharacter} from "../../types/character.js";

export const getCharsData = (state: StateSchema) => state.characters.characters

export const getChar = (state: StateSchema, charId: string | number | undefined): ICharacter | undefined => state.characters?.characters?.find(char => char.id === charId)

export const getCharInfoById = (character: ICharacter | undefined): ICharacterInfo | undefined =>  {
  if(!character) {
    return undefined
  }

  return {
    id: character?.id,
    name: character?.name, 
    info: character?.info,
    charHealth: character.info[0].count,
    charArmor: character.info[1].count,
    charClass: character.info[2].count,
    charRace: character.info[3].count,
  }
}