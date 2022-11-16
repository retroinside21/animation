import React from "react";
import style from "./style.module.scss";

export const TitleBlock = ({ title }) => {
  return <h2 className={style.title}>{title}</h2>;
};
