import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice.ts'
import {rtkApi} from "../API/rtkApi.js";

export const setupStore = configureStore({
  reducer: {
    chars: charactersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware)
})

