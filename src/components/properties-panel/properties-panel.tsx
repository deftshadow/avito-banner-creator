import React, { useState } from "react";

import "./properties-panel.css";
import html2canvas from "html2canvas";
import PropertiesSidebar from "../Sidebar/properties-sidebar/properties-sidebar";
import PropertyButton from "../Buttons/property-button/property-button";

import imageIcon from "../../assets/Icons/images-icon.svg";
import htmlIcon from "../../assets/Icons/html-icon.svg";
import pngIcon from "../../assets/Icons/png-icon.svg";
import textIcon from "../../assets/Icons/text-icon.svg";
import backgroundIcon from "../../assets/Icons/background-image.svg";
import jsonIcon from "../../assets/Icons/json-icon.svg";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";

interface Props {
  fileChangeHandler: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  copyJSONHandler: () => void;
  showHTMLPopup: () => void;
}

const PropertiesPanel: React.FC<Props> = ({
  fileChangeHandler,
  copyJSONHandler,
  showHTMLPopup,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [type, setType] = useState("");
  const { width, height } = useSelector(
    (state: ApplicationState) => state.banner
  );

  const propertyButtonClickHandler = (type: string): void => {
    setType(type);
    setIsOpened(true);
  };

  const closeSidebarHandler = (): void => {
    setIsOpened(false);
    setType("");
  };

  const exportAsPNGHandler = () => {
    const capture = document.getElementById("capture") as HTMLCanvasElement;
    html2canvas(capture, {
      allowTaint: true,
      useCORS: true,
      width: width,
      height: height,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
    }).then((canvas: HTMLCanvasElement) => {
      canvas.toBlob(
        (blob) => {
          canvas.style.display = "none";
          const anchor = document.createElement("a");
          anchor.download = `image.png`;
          anchor.href = URL.createObjectURL(blob);
          anchor.click();
          URL.revokeObjectURL(anchor.href);
        },
        "image/png",
        0.9
      );
    });
  };

  return (
    <>
      <div className="properties">
        <section className="properties-panel">
          <PropertyButton
            clickHandler={propertyButtonClickHandler}
            img={backgroundIcon}
            text="Color"
          />
          <PropertyButton
            clickHandler={propertyButtonClickHandler}
            img={textIcon}
            text="Text"
          />
          <PropertyButton
            clickHandler={propertyButtonClickHandler}
            img={imageIcon}
            text="Image"
          />
          <PropertyButton
            clickHandler={exportAsPNGHandler}
            img={pngIcon}
            text="PNG"
          />
          <PropertyButton
            clickHandler={showHTMLPopup}
            img={htmlIcon}
            text="HTML"
          />
          <PropertyButton
            clickHandler={copyJSONHandler}
            img={jsonIcon}
            text="JSON"
          />
        </section>
        <PropertiesSidebar
          clickHandler={closeSidebarHandler}
          isOpened={isOpened}
          type={type}
          fileChangeHandler={fileChangeHandler}
        />
      </div>
    </>
  );
};

export default PropertiesPanel;
