import React, { useEffect, useRef } from "react";
import "./banner.css";

import Image from "../image/image";
import Text from "../text/text";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/";

interface Props {
  bgcolor?: string;
  imagePreview: string;
  isText: boolean;
  deleteHandler: (type: string) => void;
  showPopupHandler: () => void;
}

const Banner: React.FC<Props> = ({
  imagePreview,
  isText,
  deleteHandler,
  showPopupHandler,
}) => {
  const banner = useSelector((state: ApplicationState) => state.banner);
  const imageElement = imagePreview ? (
    <Image deleteHandler={deleteHandler} imagePreview={imagePreview} />
  ) : null;
  const textElement = isText ? (
    <Text showPopupHandler={showPopupHandler} deleteHandler={deleteHandler} />
  ) : null;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = ref.current;
    banner?.classList.toggle("banner-animation");
    setTimeout(() => {
      banner?.classList.toggle("banner-animation");
    }, 1000);
  }, []);

  return (
    <div className="banner-wrapper">
      <div
        id="capture"
        style={{
          background: "transparent",
          width: `${banner.width + 1}px`,
          height: `${banner.height + 1}px`,
        }}
      >
        <div
          ref={ref}
          style={{
            background: banner.backgroundColor,
            width: `${banner.width + 1}px`,
            height: `${banner.height + 1}px`,
          }}
          className="banner"
          draggable={false}
        >
          {imageElement}
          {textElement}
        </div>
      </div>
    </div>
  );
};

export default Banner;
