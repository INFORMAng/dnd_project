import {StateSchema} from "../config/stateSchema.js";
import {IChar} from "../../interfaces/iChar";

export const getCharsData = (state: StateSchema) => state.characters.chars

export const getChar = (state: StateSchema, charId: string | number): IChar => state.characters?.chars?.find(char => char.id === charId)
