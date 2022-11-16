import React from "react";
import { ContainerBlock } from "../components/ContainerBlock";
import { TitleBlock } from "../components/TitleBlock";
import { ContentTop } from "./ContentTop";
import { ContentBottom } from "./ContentBottom";
import style from "./style.module.scss";

export const ContentBlock = ({ content, title, indent }) => {
  return (
    <div className={style.contentBlock}>
      <ContainerBlock>
        <TitleBlock title={title} />
      </ContainerBlock>
      <ContentTop content={content.main} />
      <ContainerBlock>
        <ContentBottom content={content.sub} />
      </ContainerBlock>
    </div>
  );
};
