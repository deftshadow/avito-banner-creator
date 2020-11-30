import React from "react";

import "./properties-sidebar.css";
import BackgroundSidebar from "../background-sidebar/color-sidebar";
import UploadImage from "../upload-image/upload-image";
import TextSidebar from "../text-sidebar/text-sidebar";

interface Props {
  isOpened: boolean;
  type: string;
  clickHandler: () => void;
  fileChangeHandler: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

const PropertiesSidebar: React.FC<Props> = ({
  isOpened,
  type,
  clickHandler,
  fileChangeHandler,
}) => {
  const attachedClasses: string[] = ["sidebar"];
  let sidebar = null;

  if (isOpened) {
    attachedClasses.push("open");
    switch (type) {
      case "image":
        sidebar = <UploadImage fileChangeHandler={fileChangeHandler} />;
        break;
      case "color":
        sidebar = <BackgroundSidebar />;
        break;
      case "text":
        sidebar = <TextSidebar />;
        break;
    }
  } else attachedClasses.push("closed");

  return (
    <div className={attachedClasses.join(" ")}>
      <div className="sidebar__content">{sidebar}</div>
      <button onClick={clickHandler} className="sidebar__withdraw">
        <i className="material-icons"> keyboard_arrow_left</i>
      </button>
    </div>
  );
};

export default PropertiesSidebar;
