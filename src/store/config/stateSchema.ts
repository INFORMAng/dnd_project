import {rtkApi} from "../../API/rtkApi";
import {ICharacterScheme} from "../../types/characterTypes";
import { IModalScheme } from "../../types/modalTypes";

export interface StateSchema {
    characters: ICharacterScheme,
    modal: IModalScheme,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}