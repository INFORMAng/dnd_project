export interface IModalScheme {
  isOpen: boolean;
  contentType: string;
}

export enum MODAL_CONTENT_TYPE {
  MARKER_FORM = 'characterMarkerForm',
}