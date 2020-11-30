import {
  TextActionTypes,
  ADD_TEXT,
  DELETE_TEXT,
  CHANGE_TEXT_POSITION,
  CHANGE_TEXT_SIZE,
  CHANGE_TEXT_FONT_SIZE,
  CHANGE_TEXT_VALUE,
  CHANGE_TEXT_ALIGNMENT,
  Alignment
} from "./types";

export const addText = (): TextActionTypes => {
  return {
    type: ADD_TEXT,
    payload: true,
  };
};

export const deleteText = (): TextActionTypes => {
  return {
    type: DELETE_TEXT,
    payload: false,
  };
};

export const changeTextSize = (
  width: number,
  height: number
): TextActionTypes => {
  return {
    type: CHANGE_TEXT_SIZE,
    payload: {
      width: width,
      height: height,
    },
  };
};

export const changeTextPosition = (position: string): TextActionTypes => {
  return {
    type: CHANGE_TEXT_POSITION,
    payload: position.split(','),
  };
};

export const changeTextValue = (value: string): TextActionTypes => {
  return {
    type: CHANGE_TEXT_VALUE,
    payload: value,
  };
};

export const changeTextFontSize = (value: number): TextActionTypes => {
  return {
    type: CHANGE_TEXT_FONT_SIZE,
    payload: value,
  };
};

export const changeTextAlignment = (alignment: Alignment): TextActionTypes => {
  return {
    type: CHANGE_TEXT_ALIGNMENT,
    payload: alignment,
  };
};

