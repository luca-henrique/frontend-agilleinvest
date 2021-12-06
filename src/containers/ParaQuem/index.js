import React from "react";

import { ReactComponent as GroupIcon } from "~/assets/icons/peoples.svg";

import { ReactComponent as HomeIcon } from "~/assets/icons/account_balance.svg";

import Section from "~/layouts/Section";

import {
  Container,
  Item,
  ContainerItem,
  CircleIconContainer,
  Title,
  Description,
  Button,
} from "./style";

const Index = () => {
  return (
    <Section title="Para quem">
      <Container>
        <Item>
          <ContainerItem changer>
            <CircleIconContainer>
              <GroupIcon />
            </CircleIconContainer>

            <Title changer>Pessoas com Ação Judicial</Title>

            <Description changer>
              Você não precisa se submeter a morosidade e longa espera para ver
              seu processo ser concluído. Nós intermediamos sua cessão de
              crédito junto às instituições que compram e assumem todo o risco.
            </Description>
          </ContainerItem>
          <Button style={{ marginTop: "30px" }}>Ver mais</Button>
        </Item>

        <Item>
          <ContainerItem>
            <CircleIconContainer>
              <HomeIcon />
            </CircleIconContainer>

            <Title>Advogados Interessados</Title>

            <Description>
              Intermediamos a antecipação dos seus honorários advocatícios junto
              às instituições financeiras. Traga mais celeridade com a cessão de
              crédito judicial e garanta clientes mais satisfeitos.
            </Description>
          </ContainerItem>
          <Button style={{ marginTop: "30px" }}>Ver mais</Button>
        </Item>
      </Container>
    </Section>
  );
};

export default Index;
