import {
  DELETE_TEXT,
  ADD_TEXT,
  TextActionTypes,
  TextState,
  CHANGE_TEXT_POSITION,
  CHANGE_TEXT_VALUE,
  CHANGE_TEXT_SIZE,
  CHANGE_TEXT_FONT_SIZE,
  CHANGE_TEXT_ALIGNMENT,
} from "./types";

const initialState: TextState = {
  isText: false,
  width: 220,
  height: 20,
  value: "",
  fontSize: 20,
  left: "0px",
  top: "0px",
  alignment: "left",
};

export const textReducer = (
  state = initialState,
  action: TextActionTypes
): TextState => {
  switch (action.type) {
    case ADD_TEXT: {
      return {
        ...state,
        isText: true,
      };
    }
    case DELETE_TEXT: {
      return {
        ...state,
        isText: false,
      };
    }
    case CHANGE_TEXT_SIZE: {
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      };
    }
    case CHANGE_TEXT_FONT_SIZE: {
      return {
        ...state,
        fontSize: action.payload,
      };
    }
    case CHANGE_TEXT_POSITION: {
      return {
        ...state,
        left: action.payload[0],
        top: action.payload[1],
      };
    }
    case CHANGE_TEXT_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    case CHANGE_TEXT_ALIGNMENT: {
      return {
        ...state,
        alignment: action.payload,
      };
    }
    default:
      return state;
  }
};
