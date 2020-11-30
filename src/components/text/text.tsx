import React, { useState, useRef, useEffect } from "react";
import "./text.css";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store/index";
import {
  changeTextSize,
  changeTextPosition,
  changeTextValue,
} from "../../store/text/actions";
import { Rnd } from "react-rnd";

interface Props {
  deleteHandler: (type: string) => void;
  showPopupHandler: () => void;
}

const Text: React.FC<Props> = ({ deleteHandler, showPopupHandler }) => {
  const [isFocused, setIsFocused] = useState(true);
  const text = useSelector((state: ApplicationState) => state.text);
  const dispatch = useDispatch();
  const textArea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const textElement = textArea.current as HTMLTextAreaElement;
    textElement.focus();
  });

  useEffect(() => {
    if (isFocused) {
      const textElement = textArea.current as HTMLTextAreaElement;
      textElement.focus();
    }
  }, [isFocused]);

  const textAreaHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Delete") {
      deleteHandler("text");
      return;
    } else {
      const lineCount = (event.target as HTMLTextAreaElement).value.match(/\n/g)
        ?.length;
      if (event.key === "Enter" && lineCount === 2) {
        event.preventDefault();
        showPopupHandler();
      }
    }
  };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: text.width,
        height: text.height,
      }}
      bounds="parent"
      disableDragging={isFocused}
      onMouseDown={(e) => {
        if (e.detail === 2) {
          setIsFocused(true);
          return;
        }
      }}
      onDragStop={(e, data) => {
        if (`${data.x}px` === text.left && `${data.y}px` === text.top) return;
        dispatch(changeTextPosition(`${data.x}, ${data.y}`));
      }}
      onResizeStart={(e, direction, ref) => {
        ref.classList.toggle("banner__text__drag");
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        ref.classList.toggle("banner__text__drag");
        dispatch(
          changeTextSize(ref.clientWidth, ref.clientHeight)
        );
      }}
    >
      <textarea
        ref={textArea}
        className="banner__text"
        wrap='off'
        rows={3}
        cols={60}
        style={{ fontSize: text.fontSize, textAlign: text.alignment }}
        placeholder="Text"
        onKeyDown={isFocused ? textAreaHandler : () => {}}
        onChange={(e) => {
          dispatch(changeTextValue(e.target.value));
        }}
        disabled={!isFocused}
        onBlur={() => {
          setIsFocused(false);
        }}
      ></textarea>
    </Rnd>
  );
};

export default Text;
