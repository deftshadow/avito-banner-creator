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
  const textArea = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const textElement = textArea.current as HTMLDivElement;
    textElement.focus();
  });

  useEffect(() => {
    if (isFocused) {
      const textElement = textArea.current as HTMLDivElement;
      textElement.focus();
    }
  }, [isFocused]);

  const textAreaHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Delete") {
      deleteHandler("text");
      return;
    } else {
      const lineCount = (event.target as HTMLDivElement).innerHTML.match(/<br>/g)
        ?.length;
      if (event.key === "Enter" && lineCount === 3) {
        event.preventDefault();
        showPopupHandler();
      }
    }
  };

  return (
    <Rnd
      default={{
        x: 25,
        y: 25,
        width: 180,
        height: 30,
      }}
      disableDragging={isFocused}
      onMouseDown={(e) => {
        if (e.detail === 2) {
          setIsFocused(true);
          return;
        }
      }}
      onDragStop={(e, data) => {
        if (`${data.x}px` === text.left && `${data.y}px` === text.top) return;
        dispatch(changeTextPosition(`${data.x}px, ${data.y}px`));
      }}
      onResizeStart={(e, direction, ref) => {
        ref.classList.toggle("banner__text__drag");
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        ref.classList.toggle("banner__text__drag");
        dispatch(changeTextSize(ref.clientWidth, ref.clientHeight));
      }}
    >
      <div
        ref={textArea}
        className="banner__text"
        style={{
          fontSize: text.fontSize,
          textAlign: text.alignment,
        }}
        placeholder="Text"
        onKeyDown={isFocused ? textAreaHandler : () => {}}
        onInput={(e) => {
          dispatch(changeTextValue((e.target as HTMLDivElement).innerText));
        }}
        contentEditable={isFocused}
        onBlur={() => {
          setIsFocused(false);
        }}
      ></div>
    </Rnd>
  );
};

export default Text;
