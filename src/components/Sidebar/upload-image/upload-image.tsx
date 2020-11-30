import React from "react";
import "./upload-image.css";

interface Props {
  fileChangeHandler: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

const UploadImage: React.FC<Props> = ({ fileChangeHandler }) => {
  return (
    <div className="sidebar__upload">
      <h5>Image</h5>
      <input
        className="sidebar__upload-input"
        type="text"
        onChange={fileChangeHandler}
        placeholder="Link to your image"
      ></input>
    </div>
  );
};

export default UploadImage;
