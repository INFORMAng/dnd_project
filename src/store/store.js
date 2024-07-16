import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice'
import {rtkApi} from "../API/rtkApi.js";

export const store = configureStore({
  reducer: {
    chars: charactersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
},

  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware)
})


