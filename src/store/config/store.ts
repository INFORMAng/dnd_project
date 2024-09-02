import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import charactersReducer from '../slices/charactersSlice'
import modalReducer from '../slices/modalSlice'
import {rtkApi} from "../../API/rtkApi.js";
import {StateSchema} from "./stateSchema";

const rootReducers: ReducersMapObject<StateSchema> = {
  characters: charactersReducer,
  modal: modalReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
}

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware)
})

export type AppDispatch = typeof store.dispatch

export default store