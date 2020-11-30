import React from "react";

import "./property-button.css";

interface Props {
  img: string;
  text: string;
  clickHandler: (type: string) => void;
}

const PropertyButton: React.FC<Props> = ({ img, text, clickHandler }) => {
  return (
    <>
      <button onClick={() => clickHandler(text.toLowerCase())}  className="properties-panel__button">
        <img
          className="properties-panel__icon"
          src={img}
          alt={`${text.toLowerCase()}`}
        />
        <p className='properties-panel__text'>{text}</p>
      </button>
    </>
  );
};

export default PropertyButton;
