import React from "react";
import useWindowSizeHook from "../../helpers/useWindowSizeHook";
import style from "./style.module.scss";
import logo from "../../assets/icon/logo.png";
import phone from "../../assets/icon/phone.svg";
import { MOBILE_BREAKPOINT_2 } from "../../helpers/global-constants";

export const Header = () => {
  const { width } = useWindowSizeHook();

  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <img className={style.header__logo} src={logo} alt="logo-icon" />
        {width > MOBILE_BREAKPOINT_2 ? (
          <a className={style.header__phone} href="tel:+74954954954">
            +7 (495) 495-49-54
          </a>
        ) : (
          <a className={style.header__phone} href="tel:+74954954954">
            <img src={phone} alt="phone-icon" />
          </a>
        )}
      </div>
    </div>
  );
};
