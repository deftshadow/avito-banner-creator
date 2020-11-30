import React, { useState } from "react";
import "./image.css";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store/index";
import {
  changeImageSize,
  changeImagePosition,
} from "../../store/image/actions";
import { Rnd } from "react-rnd";

interface Props {
  imagePreview: string;
  deleteHandler: (type: string) => void;
}

const Image: React.FC<Props> = ({ imagePreview, deleteHandler }) => {
  const [isFocused, setIsFocused] = useState(false);
  const image = useSelector((state: ApplicationState) => state.image);
  const dispatch = useDispatch();

  const deleteKeyHandler = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Delete") {
      deleteHandler("image");
      return;
    }
  };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 150,
        height: 150,
      }}
      onDragStop={(e, data) => {
        if (`${data.x}px` === image.left && `${data.y}px` === image.top) return;
        dispatch(changeImagePosition(`${data.x}px, ${data.y}px`));
      }}
      onResizeStart={(e, direction, ref) => {
        ref.classList.toggle("preview-image__drag");
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        ref.classList.toggle("preview-image__drag");
        dispatch(
          changeImageSize(ref.clientWidth, ref.clientHeight)
        );
      }}
    >
      <img
        src={imagePreview}
        className="preview-image"
        draggable="false"
        alt="PreviewImage"
        tabIndex={1}
        onKeyDown={isFocused ? deleteKeyHandler : () => {}}
        onFocus={(e) => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(false);
        }}
      />
    </Rnd>
  );
};

export default Image;
