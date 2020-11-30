import {
  ImageActionTypes,
  ADD_IMAGE,
  DELETE_IMAGE,
  CHANGE_IMAGE_SIZE,
  CHANGE_IMAGE_POSITION,
} from "./types";

export const addImage = (source: string): ImageActionTypes => {
  return {
    type: ADD_IMAGE,
    payload: source,
  };
};

export const deleteImage = (): ImageActionTypes => {
  return {
    type: DELETE_IMAGE,
    payload: "",
  };
};

export const changeImageSize = (
  width: number,
  height: number
): ImageActionTypes => {
  return {
    type: CHANGE_IMAGE_SIZE,
    payload: {
      width: width,
      height: height,
    },
  };
};

export const changeImagePosition = (position: string): ImageActionTypes => {
  return {
    type: CHANGE_IMAGE_POSITION,
    payload: position.split(","),
  };
};
