import React from "react";

import { useDispatch } from "react-redux";
import Banner from "./Template";

import { Container, ContainerBanner, Title, SubTitle, Legend } from "./style";

import { ReactComponent as ArrowLeft } from "~/assets/icons/arrow-left-rounded.svg";

import { Creators as ActionBanner } from "~/store/ducks/banner";

const Index = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div
        style={{ width: "100%", height: "252px", backgroundColor: "#181A20" }}
      />

      <ContainerBanner>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            marginLeft: "30px",
          }}
          onClick={() => dispatch(ActionBanner.changerBannerPath("main"))}
        >
          <ArrowLeft />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Title>Bem Vindo</Title>
              <Title style={{ color: "#4DD784", marginLeft: "10px" }}>
                Vendedor(a)!
              </Title>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <SubTitle>
                Começe procurando algum produto judicial por aqui
              </SubTitle>
            </div>

            <Legend>Dados inicial para receber oferta</Legend>

            <Banner />
          </div>
        </div>
      </ContainerBanner>
    </Container>
  );
};

export default Index;
