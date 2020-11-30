import React from "react";

import "./color-button.css";

interface Props {
  color: string;
  changeBackgroundColor: (color: string) => void;
}

const ColorButton: React.FC<Props> = ({ color, changeBackgroundColor }) => {
  return (
    <div
      className="palette__button"
      onClick={() => changeBackgroundColor(color)}
      style={{ background: color }}
    ></div>
  );
};

export default ColorButton;
