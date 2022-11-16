import React, { useLayoutEffect, useRef } from "react";
import { arrayImgSlide } from "../../../assets/configs/contents";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

import style from "./style.module.scss";


export const SliderDesktop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const slider = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    console.log(-slider?.current?.offsetWidth * 0.9);
    const anim = gsap
      .timeline({
        scrollTrigger: {
          pin: true,
          trigger: container?.current,
          start: "top 160px",
          end: () => `$+=${slider?.current?.offsetWidth * 3}`,
          invalidateOnRefresh: true,
          scrub: true,
        },
      })
      .to(slider?.current, {
        x: -slider?.current?.offsetWidth * 0.9,
      });
    return () => {
      anim()?.kill();
      anim()?.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={container} className={style.slider__box}>
      <h2 className={style.slider__title}>Lorem ipsum dolor sit amet</h2>
      <div ref={slider} className={style.slider}>
        {arrayImgSlide.map((el) => {
          return (
            <img
              className={style.slider__img}
              key={el.id}
              src={el.slide}
              alt="Slide"
            />
          );
        })}
      </div>
    </div>
  );
};
