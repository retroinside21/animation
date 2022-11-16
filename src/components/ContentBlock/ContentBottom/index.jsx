import React from "react";
import style from "./style.module.scss";

export const ContentBottom = ({ content }) => {
  const { img, title, textbig, textsmall } = content;
  return (
    <div className={style.content}>
      <div className={style.content__box}>
        <h2 className={style.content__title}>{title}</h2>
        <p className={style.content__text}>{textbig}</p>
        <p className={style.content__text}>{textsmall}</p>
      </div>
      <div className={style.content__imgbox}>
        <img src={img} alt="description" />
      </div>
    </div>
  );
};
