import {rtkApi} from "../../API/rtkApi";
import {ICharacterScheme} from "../../types/characterTypes";
import { IMarkerScheme } from "../../types/mapMarker";
import { IModalScheme } from "../../types/modalTypes";

export interface StateSchema {
    characters: ICharacterScheme,
    modal: IModalScheme,
    mapMarkers: IMarkerScheme,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}