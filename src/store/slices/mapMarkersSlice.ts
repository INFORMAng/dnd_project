import { saveArrayToLocalStorage } from '../../helpers/lib/localStorage';
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

      saveArrayToLocalStorage('localMarkersData', mapMarkersData)
      state.mapMarkers = mapMarkersData
    },
    addMapMarker: (state, action: PayloadAction<IMarkerState>) => {
      const mapMarkersData = state.mapMarkers

      mapMarkersData.push(action.payload)
      saveArrayToLocalStorage('localMarkersData', mapMarkersData)
    },
    deleteMapMarker: (state, action: PayloadAction<string>) => {
      const newMapMarkersData = state.mapMarkers.filter(marker => marker.id !== action.payload)

      state.mapMarkers = newMapMarkersData
      saveArrayToLocalStorage('localMarkersData', newMapMarkersData)
    }
  }
})

export const { setMapMarkersData, addMapMarker, deleteMapMarker} = mapMarkerSlice.actions

export default mapMarkerSlice.reducer