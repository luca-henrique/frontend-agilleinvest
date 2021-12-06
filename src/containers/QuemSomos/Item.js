import React from "react";

import { ContainerList, Item, TitleItem, DescriptionItem } from "./style";

const Index = ({ data }) => {
  return (
    <ContainerList>
      {data.map((card) => {
        return (
          <Item>
            <div>{card.icon}</div>
            <TitleItem>{card.titulo}</TitleItem>
            <DescriptionItem>{card.descricao}</DescriptionItem>
          </Item>
        );
      })}
    </ContainerList>
  );
};

export default Index;
