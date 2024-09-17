import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalScheme } from "../../types/modalTypes";
import { MODAL_CONTENT_TYPE } from "../../components/UI/MyModal/MyModal";
import { CSSProperties } from "react";

const initialState: IModalScheme = {
  [MODAL_CONTENT_TYPE.MARKER_FORM]: {isOpen: false},
  [MODAL_CONTENT_TYPE.MARKER_MENU]: {isOpen: false},
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState, 
  reducers: {
    openModal: (state, action: PayloadAction<{id: string; position?: CSSProperties}>) => {
      const {id, position} = action.payload
      state[id] = {isOpen: true, position }
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = {isOpen: false};
    },
    closeAllModals: (state) => {
      Object.keys(state).forEach(key => state[key] = {isOpen: false});
    }
  }
})

export const {openModal, closeModal, closeAllModals} = modalSlice.actions
export default modalSlice.reducer