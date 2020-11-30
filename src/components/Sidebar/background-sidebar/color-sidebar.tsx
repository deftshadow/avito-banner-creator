import React, {useState} from "react";
import "./color-sidebar.css";
import ColorPalette from "../color-palette/color-palette";

const BackgroundSidebar: React.FC = () => {
  const [colorType, setColorType] = useState("Plain");
  return (
    <>
      <section className="sidebar__background-menu">
        <span
          onClick={(e) => {
            setColorType("Plain");
          }}
          className={
            "sidebar__background-menu__button" +
            (colorType === "Plain" ? " active" : "")
          }
        >
          Plain
        </span>
        <span
          onClick={(e) => {
            setColorType("Gradient");
          }}
          className={
            "sidebar__background-menu__button" +
            (colorType === "Gradient" ? " active" : "")
          }
        >
          Gradient
        </span>
      </section>
      <ColorPalette colorType={colorType} />
    </>
  );
};

export default BackgroundSidebar;
