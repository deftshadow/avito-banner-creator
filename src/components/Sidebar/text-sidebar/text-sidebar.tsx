import React from "react";
import AddButton from "../../Buttons/add-button/add-button";
import SVGButton from "../../Buttons/svg-button/svg-button";
import NumberInput from '../font-size-input/number-input'
import AlignmentLeftIcon from "../../../assets/Icons/alignment-left.svg";
import AlignmentCenterIcon from "../../../assets/Icons/alignment-center.svg";
import AlignmentRightIcon from "../../../assets/Icons/alignment-right.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addText,
  changeTextAlignment,
  changeTextFontSize,
  Alignment,
} from "../../../store/text/";
import { ApplicationState } from "../../../store";

const TextSidebar: React.FC = () => {
  const { fontSize } = useSelector((state: ApplicationState) => state.text);
  const dispatch = useDispatch();
  const textAddHandler = (): void => {
    dispatch(addText());
  };

  const changeAlignmentHandler = (alignment: Alignment) => {
    dispatch(changeTextAlignment(alignment));
  };

  const changeFontSizeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    dispatch(changeTextFontSize(+target.value));
  };

  return (
    <>
      <AddButton clickHandler={textAddHandler} />
      <h5>Alignement</h5>
      <SVGButton
        img={AlignmentLeftIcon}
        type="left"
        clickHandler={changeAlignmentHandler}
      />
      <SVGButton
        img={AlignmentCenterIcon}
        type="center"
        clickHandler={changeAlignmentHandler}
      />
      <SVGButton
        img={AlignmentRightIcon}
        type="right"
        clickHandler={changeAlignmentHandler}
      />
      <NumberInput changeHandler={changeFontSizeHandler} text={'Font size'} value={fontSize} min={10} max={32}/>
    </>
  );
};

export default TextSidebar;
