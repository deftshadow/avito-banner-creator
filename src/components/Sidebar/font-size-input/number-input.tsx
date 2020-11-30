import React from "react";
import "./number-input.css";

interface Props {
  value: number;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  min: number;
  max: number;
}

const NumberInput: React.FC<Props> = ({
  value,
  changeHandler,
  text,
  min,
  max
}) => (
  <div className="sidebar__number-input-wrapper">
    <label className="sidebar__label">
      <p>{text}: </p>
      <input
        className="sidebar__number-input"
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={changeHandler}
      />
    </label>
  </div>
);

export default NumberInput;
