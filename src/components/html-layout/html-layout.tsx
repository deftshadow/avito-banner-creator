import React from "react";
import "./html-layout.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBannerLink } from "../../store/banner/actions";
import { PositionState, SizeState } from "../../store/index";
import { ApplicationState } from "../../store";
import { textStyles, bannerStyles } from "../../constants/bannerStyles";
import HTMLClipboardIcon from "../../assets/Icons/html-clipboard-icon.svg";

interface Props {
  discard: (type: string) => void;
}

const HTMLLayout: React.FC<Props> = ({ discard }) => {
  const banner = useSelector((state: ApplicationState) => state.banner);
  const bannerImage = useSelector((state: ApplicationState) => state.image);
  const bannerText = useSelector((state: ApplicationState) => state.text);
  const dispatch = useDispatch();

  const getSize = (element: SizeState): string => {
    return `width: ${element.width}px;
    height: ${element.height}px;`;
  };

  const getPosition = (element: PositionState): string => {
    return `top: ${element.top}px;
    left: ${element.left}px;`;
  };

  const image = bannerImage.imagePreview
    ? `<img src=${bannerImage.imagePreview} style="
    position: absolute;
    ${getPosition(bannerImage)}
    ${getSize(bannerImage)}
  "/>`
    : "";

  const text = bannerText.isText
    ? `<p readonly disabled style="
    ${textStyles}
    ${getPosition(bannerText)}
    ${getSize(bannerText)}
    font-size: ${bannerText.fontSize}px;
    font-family: sans-serif;
    text-align: ${bannerText.alignment};
  ">${bannerText.value}</p>`
    : "";

  const bannerHTML = `<a href=${banner.link}><div style="
    ${bannerStyles}
    overflow: hidden;
    background: ${banner.backgroundColor};
    ${getSize(banner)}
  ">
    ${image}
    ${text}
  </div></a>`;

  const copyClickHandler = () => {
    navigator.clipboard
      .writeText(bannerHTML)
      .then(() => discard("success"))
      .catch((err) => {
        discard("error");
      });
  };

  return (
    <div className="html-layout">
      <img
        className="html-layout__icon"
        src={HTMLClipboardIcon}
        alt="HTML Layout"
      />
      <label className="html-layout__label">
        Banner link:
        <input
          value={banner.link}
          className="html-layout__input"
          placeholder="Your link"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(changeBannerLink(event.target.value));
          }}
        ></input>
      </label>
      <button className="html-layout__button" onClick={copyClickHandler}>
        Clipboard
      </button>
    </div>
  );
};

export default HTMLLayout;
