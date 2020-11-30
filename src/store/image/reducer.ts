import {
  CHANGE_IMAGE_SIZE,
  DELETE_IMAGE,
  ADD_IMAGE,
  ImageActionTypes,
  ImageState,
  CHANGE_IMAGE_POSITION,
} from "./types";

const initialState: ImageState = {
  imagePreview: "",
  width: 150,
  height: 150,
  left: "0px",
  top: "0px",
};

export const imageReducer = (
  state = initialState,
  action: ImageActionTypes
): ImageState => {
  switch (action.type) {
    case ADD_IMAGE: {
      return {
        ...state,
        imagePreview: action.payload,
      };
    }
    case DELETE_IMAGE: {
      return {
        ...state,
        imagePreview: "",
      };
    }
    case CHANGE_IMAGE_SIZE: {
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      };
    }
    case CHANGE_IMAGE_POSITION: {
      return {
        ...state,
        left: action.payload[0],
        top: action.payload[1],
      };
    }
    default:
      return state;
  }
};
