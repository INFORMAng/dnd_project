export interface IMarkerState {
  name: string,
  color: string,
  size: string,
}

export enum MARKER_COLOR_TYPE {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

export enum MARKER_SIZE_TYPE {
  S = "small",
  M = "medium", 
  L = "large",
  XL = "extra_large",
}

export const markerColorOptions = [
  {value: MARKER_COLOR_TYPE.RED, title: "Красный"},
  {value: MARKER_COLOR_TYPE.GREEN, title: "Синий"},
  {value: MARKER_COLOR_TYPE.BLUE, title: "Зелёный"},
]

export const markerSizeOptions = [
  {value: MARKER_SIZE_TYPE.S, title: "S"},
  {value: MARKER_SIZE_TYPE.M, title: "M"},
  {value: MARKER_SIZE_TYPE.L, title: "L"},
  {value: MARKER_SIZE_TYPE.XL, title: "XL"},
]