import React from "react";

import {
  Container,
  ContainerMap,
  Title,
  Description,
  Main,
  Button,
} from "./style";

import Section from "~/layouts/Section";

const Index = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Section title="Fale conosco">
        <Main>
          <Container>
            <div style={{ marginBottom: "30px" }}>
              <Title>Endereço</Title>
              <Description>Av. Lins Petit, 320</Description>
              <Description>11° Andar Boa Vista</Description>
              <Description>Recife/PE CEP: 50070-270</Description>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Title>Ligue ou Envie Email</Title>
              <Description>(81) 4042-9889 </Description>
              <Description>contato@agilleinvest.com.br</Description>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <Title>Horários</Title>
              <Description> Sex: 08:00 às 18:00 Sab-Dom: Fechado</Description>
              <Description> Sab-Dom: Fechado</Description>
            </div>
          </Container>

          <ContainerMap>
            <Button>Veja mais</Button>
          </ContainerMap>
        </Main>
      </Section>
    </div>
  );
};

export default Index;
