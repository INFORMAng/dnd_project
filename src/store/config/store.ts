import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import charactersReducer from '../slices/charactersSlice'
import {rtkApi} from "../../API/rtkApi.js";
import {StateSchema} from "./stateSchema";

const rootReducers: ReducersMapObject<StateSchema> = {
  characters: charactersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
}

export const setupStore = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware)
})

export type AppDispatch = typeof setupStore.dispatch

export default setupStore