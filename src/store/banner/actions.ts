import {
  BannerActionTypes,
  CHANGE_BANNER_BACKGROUND_COLOR,
  CHANGE_BANNER_BACKGROUND_IMAGE,
  CHANGE_BANNER_WIDTH,
  CHANGE_BANNER_HEIGHT,
  CHANGE_BANNER_LINK,
} from "./types";

export const changeBannerBackgroundColor = (
  color: string
): BannerActionTypes => {
  return {
    type: CHANGE_BANNER_BACKGROUND_COLOR,
    payload: color,
  };
};

export const changeBannerBackgroundImage = (
  gradient: string
): BannerActionTypes => {
  return {
    type: CHANGE_BANNER_BACKGROUND_IMAGE,
    payload: gradient,
  };
};

export const changeBannerWidth = (width: number): BannerActionTypes => {
  return {
    type: CHANGE_BANNER_WIDTH,
    payload: width,
  };
};

export const changeBannerHeight = (width: number): BannerActionTypes => {
  return {
    type: CHANGE_BANNER_HEIGHT,
    payload: width,
  };
};

export const changeBannerLink = (link: string): BannerActionTypes => {
  return {
    type: CHANGE_BANNER_LINK,
    payload: link,
  };
};


