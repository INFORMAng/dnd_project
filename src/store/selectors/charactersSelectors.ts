import { StateSchema } from './../config/stateSchema';
import {ICharacter, ICharacterInfo} from "../../types/characterTypes.js";
import {createSelector} from "@reduxjs/toolkit";

export const getAllCharacters = (state: StateSchema) => state.characters.characters

export const getCharacter = (state: StateSchema, charId: string | number | undefined): ICharacter | undefined => state.characters?.characters?.find(char => char.id === charId)

export const getCharacterInfoCounts = createSelector(
    [getCharacter], (character): ICharacterInfo => {
        return (character?.info || []).reduce((acc, item) => {
            switch (item.name) {
              case "Здоровье":
                acc.charHealth = item.count;
                break;
              case "Броня":
                acc.charArmor = item.count;
                break;
              case "Класс":
                acc.charClass = item.count;
                break;
              case "Раса":
                acc.charRace = item.count;
                break;
            }
            return acc;
          }, {} as ICharacterInfo);
    }
)