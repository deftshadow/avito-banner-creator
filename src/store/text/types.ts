export const ADD_TEXT = "ADD_TEXT";
export const DELETE_TEXT = "DELETE_TEXT";
export const CHANGE_TEXT_SIZE = "CHANGE_TEXT_SIZE";
export const CHANGE_TEXT_POSITION = "CHANGE_TEXT_POSITION";
export const CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE";
export const CHANGE_TEXT_FONT_SIZE = "CHANGE_TEXT_FONT_SIZE";
export const CHANGE_TEXT_ALIGNMENT = "CHANGE_TEXT_ALIGNMENT";
export type TextActionTypes =
  | AddTextAction
  | DeleteTextAction
  | ChangeTextPositionAction
  | ChangeTextSizeAction
  | ChangeTextValueAction
  | ChangeTextFontSizeAction
  | ChangeTextAlignmentAction;

export interface TextState {
  isText: boolean;
  width: number;
  height: number;
  left: string;
  top: string;
  value: string;
  fontSize: number;
  alignment: Alignment;
}

export type Alignment = "left" | "right" | "center";

interface Size {
  width: number;
  height: number;
}

interface AddTextAction {
  type: typeof ADD_TEXT;
  payload: boolean;
}

interface DeleteTextAction {
  type: typeof DELETE_TEXT;
  payload: boolean;
}

interface ChangeTextSizeAction {
  type: typeof CHANGE_TEXT_SIZE;
  payload: Size;
}

interface ChangeTextPositionAction {
  type: typeof CHANGE_TEXT_POSITION;
  payload: string[];
}

interface ChangeTextValueAction {
  type: typeof CHANGE_TEXT_VALUE;
  payload: string;
}

interface ChangeTextFontSizeAction {
  type: typeof CHANGE_TEXT_FONT_SIZE;
  payload: number;
}

interface ChangeTextAlignmentAction {
  type: typeof CHANGE_TEXT_ALIGNMENT;
  payload: Alignment;
}
