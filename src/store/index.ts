import { combineReducers } from "redux";
import { imageReducer } from "./image/reducer";
import { ImageState } from "./image/types";
import { textReducer } from "./text/reducer";
import { TextState } from "./text/types";
import { BannerState } from "./banner/types";
import { bannerReducer } from "./banner/reducer";

export type SizeState = ImageState | TextState | BannerState;
export type PositionState = ImageState | TextState;

export interface ApplicationState {
  image: ImageState;
  text: TextState;
  banner: BannerState;
}

export const rootReducer = combineReducers({
  image: imageReducer,
  text: textReducer,
  banner: bannerReducer,
});
