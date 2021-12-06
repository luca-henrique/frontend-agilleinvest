import React from "react";

import Banner from "./Template";

import { Container, ContainerBanner, Title, SubTitle } from "./style";

import { ReactComponent as ArrowLeft } from "~/assets/icons/arrow-right-rounded.svg";

const Index = () => {
  return (
    <Container>
      <div
        style={{ width: "100%", height: "252px", backgroundColor: "#181A20" }}
      />

      <ContainerBanner>
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
              <Title>Bem Vindo a Agille Invest</Title>
            </div>
            <div style={{ marginBottom: "25px" }}>
              <SubTitle>
                Começe procurando algum produto judicial por aqui
              </SubTitle>
            </div>

            <Banner />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            marginRight: "30px",
          }}
        >
          <ArrowLeft />
        </div>
      </ContainerBanner>
    </Container>
  );
};

export default Index;
