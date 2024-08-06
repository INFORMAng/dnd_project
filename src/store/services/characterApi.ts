import {rtkApi} from "../../API/rtkApi.js";
import {ICharacter} from "../../types/character.js";

const charactersApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query<ICharacter[], null>({
            query: () => ({
                url: '/characters',
            }),
        }),
    }),
});

export const useCharacters = charactersApi.useGetCharactersQuery;