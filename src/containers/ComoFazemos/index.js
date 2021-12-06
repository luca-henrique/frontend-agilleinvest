import React from "react";

import Section from "~/layouts/Section";

import { ComoFazemos } from "~/constants/ComoFazemos";

import {
  Container,
  Item,
  ContainerItem,
  Image,
  Circle,
  CircleText,
  Title,
  Description,
} from "./style";

const Index = () => {
  return (
    <Section title="Como fazemos">
      <Container>
        {ComoFazemos.map((item, index) => {
          return (
            <Item>
              <Image>
                <Circle>
                  <CircleText>{++index}</CircleText>
                </Circle>
                {item?.img}
              </Image>
              <ContainerItem>
                <Title>{item?.titulo}</Title>
                <Description>{item?.descricao}</Description>
              </ContainerItem>
            </Item>
          );
        })}
      </Container>
    </Section>
  );
};

export default Index;
