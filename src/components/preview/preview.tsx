import React, { useState, useEffect } from "react";

import "./preview.css";

import Banner from "../banner/banner";
import Header from "../header/header";
import TextErrorPopup from "../text-error-popup/text-error-popup";

interface Props {
  imagePreview: string;
  isText: boolean;
  deleteHandler: (type: string) => void;
}

const Preview: React.FC<Props> = ({ imagePreview, isText, deleteHandler }) => {
  const [popupShow, setPopupShow] = useState(false);

  useEffect(() => {
    if (popupShow === true) {
      setTimeout(() => setPopupShow(false), 4000);
    }
  }, [popupShow]);

  const showPopupHandler = () : void => {
    setPopupShow(true);
  };

  return (
    <div id='portal' className="preview-wrapper">
      <Header />
      <Banner
        deleteHandler={deleteHandler}
        isText={isText}
        imagePreview={imagePreview}
        showPopupHandler={showPopupHandler}
      />
      <TextErrorPopup show={popupShow} />
    </div>
  );
};

export default Preview;
