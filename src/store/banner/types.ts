export const CHANGE_BANNER_BACKGROUND_COLOR = "CHANGE_BANNER_BACKGROUND_COLOR";
export const CHANGE_BANNER_BACKGROUND_IMAGE = "CHANGE_BANNER_BACKGROUND_IMAGE";
export const CHANGE_BANNER_WIDTH = "CHANGE_BANNER_WIDTH";
export const CHANGE_BANNER_HEIGHT = "CHANGE_BANNER_HEIGHT";
export const CHANGE_BANNER_LINK = "CHANGE_BANNER_LINK";
export type BannerActionTypes =
  | changeBannerBackgroundColor
  | changeBannerWidth
  | changeBannerHeight
  | changeBannerBackgroundImage
  | changeBannerLink;

export interface BannerState {
  backgroundColor: string;
  width: number;
  height: number;
  link: string;
}

export interface BackgroundImage {
  rotation: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
}

interface changeBannerBackgroundColor {
  type: typeof CHANGE_BANNER_BACKGROUND_COLOR;
  payload: string;
}

interface changeBannerBackgroundImage {
  type: typeof CHANGE_BANNER_BACKGROUND_IMAGE;
  payload: string;
}

interface changeBannerWidth {
  type: typeof CHANGE_BANNER_WIDTH;
  payload: number;
}

interface changeBannerHeight {
  type: typeof CHANGE_BANNER_HEIGHT;
  payload: number;
}

interface changeBannerLink {
  type: typeof CHANGE_BANNER_LINK;
  payload: string;
}
