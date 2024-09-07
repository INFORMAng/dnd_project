import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalScheme } from "../../types/modalTypes";

const initialState: IModalScheme = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer