import React from "react";
import { arrayImgSlide } from "../../../assets/configs/contents";

import {
  Swiper,
  SwiperSlide,
} from "../../../../node_modules/swiper/react/swiper-react";

import style from "./style.module.scss";

export const SliderMobile = () => {
  return (
    <div className={style.slider__box}>
      <h2 className={style.slider__title}>Lorem ipsum dolor sit amet</h2>
      <Swiper className={style.swiper} spaceBetween={28} slidesPerView={"auto"}>
        {arrayImgSlide.map((el, index) => (
          <SwiperSlide key={index} >
            <img
              className={style.slider__img}
              key={el.id}
              src={el.slide}
              alt="Slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
