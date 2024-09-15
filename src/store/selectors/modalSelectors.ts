import { IModalState } from "../../types/modalTypes";
import { StateSchema } from "../config/stateSchema";

export const getModalState = (state: StateSchema, modalId: string): IModalState | undefined => {
  return state.modal[modalId]
}