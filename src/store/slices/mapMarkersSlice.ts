import { LOCAL_STORAGE_KEYS, saveArrayToLocalStorage } from '../../helpers/lib/localStorage';
import { IMarkerScheme, IMarkerState } from './../../types/mapMarker';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IMarkerScheme = {
  mapMarkers: [],
}

const mapMarkerSlice = createSlice({
  name: 'mapMarkers',
  initialState,
  reducers: {
    setMapMarkersData: (state, action: PayloadAction<IMarkerState[]>) => {
      const mapMarkersData = action.payload

      saveArrayToLocalStorage(LOCAL_STORAGE_KEYS.MARKERS, mapMarkersData)
      state.mapMarkers = mapMarkersData
    },
    addMapMarker: (state, action: PayloadAction<IMarkerState>) => {
      const mapMarkersData = state.mapMarkers

      mapMarkersData.push(action.payload)
      saveArrayToLocalStorage(LOCAL_STORAGE_KEYS.MARKERS, mapMarkersData)
    },
    deleteMapMarker: (state, action: PayloadAction<string>) => {
      const newMapMarkersData = state.mapMarkers.filter(marker => marker.id !== action.payload)

      state.mapMarkers = newMapMarkersData
      saveArrayToLocalStorage(LOCAL_STORAGE_KEYS.MARKERS, newMapMarkersData)
    }
  }
})

export const { setMapMarkersData, addMapMarker, deleteMapMarker} = mapMarkerSlice.actions

export default mapMarkerSlice.reducer