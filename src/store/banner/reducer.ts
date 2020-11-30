import {
  CHANGE_BANNER_BACKGROUND_COLOR,
  BannerActionTypes,
  BannerState,
  CHANGE_BANNER_WIDTH,
  CHANGE_BANNER_HEIGHT,
  CHANGE_BANNER_LINK,
} from "./types";

const initialState: BannerState = {
  backgroundColor: "#E17BE1",
  width: 350,
  height: 350,
  link: "",
};

export const bannerReducer = (
  state = initialState,
  action: BannerActionTypes
): BannerState => {
  switch (action.type) {
    case CHANGE_BANNER_BACKGROUND_COLOR: {
      return {
        ...state,
        backgroundColor: action.payload,
      };
    }
    case CHANGE_BANNER_WIDTH: {
      return {
        ...state,
        width: action.payload,
      };
    }
    case CHANGE_BANNER_HEIGHT: {
      return {
        ...state,
        height: action.payload,
      };
    }
    case CHANGE_BANNER_LINK: {
      return {
        ...state,
        link: action.payload,
      };
    }
    default:
      return state;
  }
};
