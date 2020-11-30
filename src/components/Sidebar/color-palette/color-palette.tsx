import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../store";
import { changeBannerBackgroundColor } from "../../../store/banner/actions";
import PlainColor from "../plain-color/plain-color";
import GradientColor from "../gradient-color/gradient-color";

import "./color-palette.css";

interface Props {
  colorType: string;
}

const ColorPalette: React.FC<Props> = ({ colorType }) => {
  let content = null;
  const dispatch = useDispatch();
  const { backgroundColor } = useSelector(
    (state: ApplicationState) => state.banner
  );

  const colorChangeHandler = (color: string, type: string) => {
    dispatch(changeBannerBackgroundColor(color));
  };

  if (colorType === "Plain") {
    content = (
      <PlainColor
        colorChangeHandler={colorChangeHandler}
        backgroundColor={backgroundColor}
      />
    );
  } else {
    content = (
      <GradientColor
        colorChangeHandler={colorChangeHandler}
        backgroundColor={backgroundColor}
      />
    );
  }
  return <div className="palette">{content}</div>;
};

export default ColorPalette;
