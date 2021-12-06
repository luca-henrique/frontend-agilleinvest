import React from "react";

import Item from "./Item";

import { Container, Card, CardSize, CardText, ImageCard } from "./style";

import QuemSomosImg from "~/assets/images/quemSomos.png";
import { QuemSomos } from "~/constants/QuemSomos";

import Section from "~/layouts/Section";

const Index = () => {
  return (
    <div style={{ marginTop: "306px" }}>
      <Section title="Quem somos">
        <Container>
          <Card>
            <CardSize>
              <CardText>
                Hoje todas as suas frustrações e incertezas chegaram ao fim!
                Agilize conosco o acesso aos recebíveis dos seus processos
                judiciais com segurança e facilidade. Quer dinheiro na mão,
                agora?
              </CardText>
            </CardSize>

            <ImageCard>
              <img
                src={QuemSomosImg}
                width="100%"
                height="100%"
                alt="Quem Somos"
              />
            </ImageCard>
          </Card>

          <Item data={QuemSomos} />
        </Container>
      </Section>
    </div>
  );
};

export default Index;
