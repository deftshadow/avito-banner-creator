import React from "react";
import './header.css'
import {
  changeBannerWidth,
  changeBannerHeight,
} from "../../store/banner/actions";
import { ApplicationState } from "../../store/";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { width: bannerWidth, height: bannerHeight } = useSelector(
    (state: ApplicationState) => state.banner
  );

  const dispatch = useDispatch();

  const resizeWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const width = +target.value;
    dispatch(changeBannerWidth(width));
  };

  const resizeHeightHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const width = +target.value;
    dispatch(changeBannerHeight(width));
  };

  return (
    <header className='header'>
      <input className='header__input' value={bannerWidth} onChange={resizeWidthHandler} placeholder="Width" />
      <p>X</p>
      <input className='header__input' value={bannerHeight} onChange={resizeHeightHandler} placeholder="Height" />
    </header>
  );
};

export default Header;