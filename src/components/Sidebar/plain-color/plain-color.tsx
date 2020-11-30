import React from "react";
import './plain-color.css'
import ColorButton from "../../Buttons/color-button/color-button";
import { ChromePicker } from "react-color";
import { colors } from "../../../constants/colors";

interface Props {
  colorChangeHandler: (color: string, type: string) => void;
  backgroundColor: string;
}

const colorButtons: string[] = colors.slice(0, 6);

const PlainColor: React.FC<Props> = ({
  colorChangeHandler,
  backgroundColor,
}) => {
  const content = colorButtons.map((color: string) => {
    return (
      <ColorButton
        key={`${color}-button`}
        color={color}
        changeBackgroundColor={(e) => colorChangeHandler(color, "Plain")}
      />
    );
  });

  return (
    <>
      <h5>Plain color</h5>
      <div className="palette__preset-colors">{content}</div>
      <div className="palette__color-picker">
        <ChromePicker
          color={backgroundColor}
          onChange={(e) => {
            colorChangeHandler(
              `rgba(${e.rgb.r},${e.rgb.g},${e.rgb.b},${e.rgb.a})`,
              "Plain"
            );
          }}
        />
      </div>
    </>
  );
};

export default PlainColor;
