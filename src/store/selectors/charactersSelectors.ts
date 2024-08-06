import {StateSchema} from "../config/stateSchema.js";
import {ICharacter} from "../../types/character.js";

export const getCharsData = (state: StateSchema) => state.characters.chars

export const getChar = (state: StateSchema, charId: string | number | undefined): ICharacter | undefined => state.characters?.chars?.find(char => char.id === charId)
