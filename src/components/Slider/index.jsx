import React from "react";
import { SliderDesktop } from "./SliderDesktop";
import { SliderMobile } from "./SliderMobile";
import { MOBILE_BREAKPOINT_2 } from "../../helpers/global-constants";
import useWindowSizeHook from "../../helpers/useWindowSizeHook";

import style from "./style.module.scss";

export const Slider = () => {
  const { width } = useWindowSizeHook();
  return (
    <div className={style.sliderwrapper}>
      {width > MOBILE_BREAKPOINT_2 ? <SliderDesktop /> : <SliderMobile />}
    </div>
  );
};
