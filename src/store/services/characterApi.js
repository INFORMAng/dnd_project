import {rtkApi} from "../../API/rtkApi.js";

const charactersApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCharacters: build.query({
            query: () => ({
                url: '/characters',
            }),
        }),
    }),
});

export const useCharacters = charactersApi.useGetCharactersQuery;