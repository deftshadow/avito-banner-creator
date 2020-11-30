import React from "react";
import "./modal.css";
import Backdrop from "../bacdrop/backdrop";

interface Props {
  show: boolean;
  canceled: () => void;
}

const Modal: React.FC<Props> = ({ show, canceled, children }) => {
  return (
    <>
      <Backdrop canceled={canceled} show={show} />
      <div
        className="modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
