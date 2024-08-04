import {rtkApi} from "../../API/rtkApi";
import {ICharacterScheme} from "../../interfaces/iChar";

export interface StateSchema {
    characters: ICharacterScheme,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}