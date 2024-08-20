import { StateSchema } from './../config/stateSchema';
import {ICharacter, ICharacterInfo} from "../../types/character.js";
import {createSelector} from "@reduxjs/toolkit";

export const getAllCharacters = (state: StateSchema) => state.characters.characters

export const getCharacter = (state: StateSchema, charId: string | number | undefined): ICharacter | undefined => state.characters?.characters?.find(char => char.id === charId)

export const getCharacterInfoCounts = createSelector(
    [getCharacter], (character): ICharacterInfo => {
        return character.info.map(info => info.count) as ICharacterInfo
    }
)