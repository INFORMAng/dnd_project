import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalScheme } from "../../types/modalTypes";
import { ReactNode } from "react";

const initialState: IModalScheme = {
  isOpen: false,
  content: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ReactNode>) => {
      state.isOpen = true;
      state.content = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    }
  }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer