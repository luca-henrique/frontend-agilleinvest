import React from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  Item,
  Container,
  Title,
  Description,
  Autor,
  Tipo,
  Main,
} from "./style";

import { ReactComponent as AspasIcon } from "~/assets/icons/aspas.svg";
import { ReactComponent as ArrowLeft } from "~/assets/icons/contained-arrow-left.svg";
import { ReactComponent as ArrowRight } from "~/assets/icons/contained-arrow-right.svg";

const Index = () => {
  const { innerWidth: width } = window;

  const numbersOfSlideWithWidth = () => {
    if (width <= 1260) {
      return 1;
    }
    return 3;
  };

  return (
    <Container>
      <Title>Depoimentos</Title>
      <Main>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: slidesToShowPlugin,

              options: {
                numberOfSlides: numbersOfSlideWithWidth(),
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <ArrowLeft name="angle-double-left" />,
                arrowLeftDisabled: <ArrowLeft name="angle-left" />,
                arrowRight: <ArrowRight name="angle-double-right" />,
                arrowRightDisabled: <ArrowRight name="angle-right" />,
                addArrowClickHandler: true,
              },
            },
          ]}
        >
          <Item>
            <div style={{ marginBottom: "30px" }}>
              <AspasIcon />
            </div>

            <div>
              <Description>
                O longo atraso no pagamento do precatório me fez buscar Agille
                Invest que intermediou e deu rápida solução para receber meu
                ativo
              </Description>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "32px",
              }}
            >
              <Autor>Yelken Gonzales</Autor>
              <Tipo>Cliente</Tipo>
            </div>
          </Item>

          <Item>
            <div style={{ marginBottom: "30px" }}>
              <AspasIcon />
            </div>

            <div>
              <Description>
                O longo atraso no pagamento do precatório me fez buscar Agille
                Invest que intermediou e deu rápida solução para receber meu
                ativo
              </Description>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "32px",
              }}
            >
              <Autor>Yelken Gonzales</Autor>
              <Tipo>Cliente</Tipo>
            </div>
          </Item>
        </Carousel>
      </Main>
    </Container>
  );
};

export default Index;
