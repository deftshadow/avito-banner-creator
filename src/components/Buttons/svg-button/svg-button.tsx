import React from "react";

import "./svg-button.css";
import {Alignment} from '../../../store/text'

interface Props {
  img: string;
  type: Alignment;
  clickHandler: (alignment: Alignment) => void;
}

const SVGButton: React.FC<Props> = ({ img, type, clickHandler }) => {
  return (
    <>
      <button onClick={() => clickHandler(type)}  className="svg-button">
        <img
          className="svg-icon"
          src={img}
          alt={`${type.toLowerCase()}`}
        />
      </button>
    </>
  );
};

export default SVGButton;
