import React from "react";
import './add-button.css'

interface Props {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButton: React.FC<Props> = ({ clickHandler }) => {
  return (
    <button className={"sidebar__add-button"} onClick={clickHandler}>Add</button>
  );
};

export default AddButton;