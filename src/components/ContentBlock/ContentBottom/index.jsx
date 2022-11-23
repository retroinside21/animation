import React from "react";
import style from "./style.module.scss";

export const ContentBottom = ({ content }) => {
  const { imgDesktop, imgMobile, title, textbig, textsmall } = content;

  return (
    <div className={style.content}>
      <div className={style.content__box}>
        <h2 className={style.content__title}>{title}</h2>
        <p className={style.content__text}>{textbig}</p>
        <p className={style.content__text}>{textsmall}</p>
      </div>
      <picture className={style.content__imgbox}>
        <source
          className={style.content__img}
          media="(max-width: 500px)"
          srcSet={imgMobile}
        />
        <img
          className={style.content__img}
          src={imgDesktop}
          alt="description"
        />
      </picture>
    </div>
  );
};
