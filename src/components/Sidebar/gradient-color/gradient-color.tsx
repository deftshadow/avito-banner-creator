import React, { useState } from "react";
import "./gradient-color.css";
import ColorButton from "../../Buttons/color-button/color-button";
import { gradients } from "../../../constants/colors";

interface Props {
  colorChangeHandler: (color: string, type: string) => void;
  backgroundColor: string;
}

const gradientTypeColors = "#f69d3c, #3f87a6";
const gradientTypes = ["linear-gradient", "radial-gradient"];

const GradientColor: React.FC<Props> = ({ colorChangeHandler }) => {
  const [gradientType, setGradientType] = useState("linear-gradient");

  const gradientTypeButtons = gradientTypes.map((type: string) => {
    return (
      <ColorButton
        key={`${type}-button`}
        color={`${type}(${gradientTypeColors})`}
        changeBackgroundColor={(e) => setGradientType(type)}
      />
    );
  });

  const colorButtons = gradients.map((color: string) => {
    return (
      <ColorButton
        key={`${color}-button`}
        color={`${gradientType}(${color})`}
        changeBackgroundColor={(e) =>
          colorChangeHandler(`${gradientType}(${color})`, "Gradient")
        }
      />
    );
  });
  return (
    <>
      <h5>Gradient type</h5>
      <div className="palette__preset-colors">{gradientTypeButtons}</div>
      <h5>Presets: </h5>
      <div className="palette__preset__gradient-colors">{colorButtons}</div>
    </>
  );
};

export default GradientColor;
