import {rtkApi} from "../../API/rtkApi";
import {ICharacterScheme} from "../../types/character";

export interface StateSchema {
    characters: ICharacterScheme,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}