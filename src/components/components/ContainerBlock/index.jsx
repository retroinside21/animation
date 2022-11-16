import React from "react";
import style from "./style.module.scss";

export const ContainerBlock = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
