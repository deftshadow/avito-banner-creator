import React from "react";

import "./backdrop.css";

interface Props {
  show: boolean;
  canceled: () => void;
}

const Backdrop: React.FC<Props> = ({ show, canceled }) =>
  show ? <div className='backdrop' onClick={canceled}></div> : null;

export default Backdrop;
