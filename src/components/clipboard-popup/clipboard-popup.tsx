import React from "react";
import "./clipboard-popup.css";
import ReactDom from "react-dom";
import ErrorIcon from "../../assets/Icons/error-icon.svg";
import SuccessIcon from "../../assets/Icons/success-icon.svg";

interface Props {
  type: string;
}

const ClipboardPopup: React.FC<Props> = ({ type }) => {
  if (!type) return null;
  const portal = document.getElementById("portal");
  let text: string, img: string, backgroundColor: string;
  if (type === "success") {
    text = "Copy Success!";
    img = SuccessIcon;
    backgroundColor = "#155724";
  } else {
    text = "Oops, something went wrong";
    img = ErrorIcon;
    backgroundColor = "#721c24";
  }
  return portal
    ? ReactDom.createPortal(
        <div
          className="clipboard-popup"
          style={{
            opacity: !type ? "0" : "",
            backgroundColor: backgroundColor,
          }}
        >
            
          <img className='clipboard-popup__image' src={img} alt="Status" />
          <p className='clipboard-popup__text'>{text}</p>
        </div>,
        portal
      )
    : null;
};

export default ClipboardPopup;
