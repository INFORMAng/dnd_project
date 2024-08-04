import {rtkApi} from "../../API/rtkApi.js";
import {IChar} from "../../interfaces/iChar";

const charactersApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query<IChar[], null>({
            query: () => ({
                url: '/characters',
            }),
        }),
    }),
});

export const useCharacters = charactersApi.useGetCharactersQuery;