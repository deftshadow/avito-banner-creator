export const ADD_IMAGE = "ADD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const CHANGE_IMAGE_SIZE = "CHANGE_IMAGE_SIZE";
export const CHANGE_IMAGE_POSITION = "CHANGE_IMAGE_POSITION";
export type ImageActionTypes =
  | AddImageAction
  | DeleteImageAction
  | ChangeImageSizeAction
  | ChangeImagePositionAction;

export interface ImageState {
  imagePreview: string;
  width: number;
  height: number;
  top: string;
  left: string;
}

interface Size {
  width: number;
  height: number;
}

interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: string;
}

interface DeleteImageAction {
  type: typeof DELETE_IMAGE;
  payload: string;
}

interface ChangeImageSizeAction {
  type: typeof CHANGE_IMAGE_SIZE;
  payload: Size;
}

interface ChangeImagePositionAction {
  type: typeof CHANGE_IMAGE_POSITION;
  payload: string[];
}
