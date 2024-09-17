import { CSSProperties } from "react";

export interface IModalScheme {
  [key: string]: IModalState;
}

export interface IModalState {
  isOpen: boolean;
  position?: CSSProperties;  
}

