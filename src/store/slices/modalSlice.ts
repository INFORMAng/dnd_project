import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalScheme } from "../../types/modalTypes";

const initialState: IModalScheme = {
  isOpen: false,
  contentType: '',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.contentType = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contentType = '';
    }
  }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer