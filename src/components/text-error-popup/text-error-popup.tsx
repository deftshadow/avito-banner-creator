import React from "react";
import "./text-error-popup.css";
import WarningIcon from '../../assets/Icons/warning-icon.svg';

interface Props {
  show: boolean;
}

const TextErrorPopup: React.FC<Props> = ({ show }) => {
  const classes = show ? "popup show" : "popup";
  return (
    <div className={classes}>
      <img className='popup-warning' src={WarningIcon} alt='TextErrorLength'/>
      <p className="popup-text">Текст не может состоять более чем из 3 строк</p>
    </div>
  );
};

export default TextErrorPopup;
