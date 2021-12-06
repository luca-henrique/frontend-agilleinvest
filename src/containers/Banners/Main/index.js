import React from "react";

import { useDispatch } from "react-redux";
import { Creators as ActionBanner } from "~/store/ducks/banner";

import {
  Container,
  ContainerBanner,
  Title,
  SubTitle,
  ContainerButton,
  Button,
  ButtonSize,
  ContainerButtonSize,
} from "./style";

const Index = () => {
  const [investidorSelected, setInvestidorSelected] = React.useState(true);
  const [vendedorSelected, setVendedorSelected] = React.useState(false);

  const { innerWidth: width } = window;

  const dispatch = useDispatch();

  const changerToInvestidor = () => {
    setInvestidorSelected(true);
    setVendedorSelected(false);
    dispatch(ActionBanner.changerBannerPath("investidor"));
    localStorage.setItem("@Agille:User", "investidor");
  };

  const changerToVendedor = () => {
    setInvestidorSelected(false);
    setVendedorSelected(true);
    dispatch(ActionBanner.changerBannerPath("vendedor"));
    localStorage.setItem("@Agille:User", "vendedor");
  };

  return (
    <Container>
      <div
        style={{ width: "100%", height: "252px", backgroundColor: "#181A20" }}
      />

      <ContainerBanner>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Title>Bem Vindo a</Title>
          <Title style={{ color: "#4DD784", marginLeft: "10px" }}>
            Agille Invest!
          </Title>
        </div>

        <div>
          <SubTitle>Começe procurando algum produto judicial por aqui</SubTitle>
        </div>

        <div style={{ marginTop: "33px" }}>
          <SubTitle style={{ color: "#4DD784", fontSize: "22px" }}>
            Qual o seu perfil?
          </SubTitle>
        </div>
        {width >= 440 ? (
          <ContainerButtonSize style={{ marginTop: "23px" }}>
            <ButtonSize
              selected={investidorSelected}
              onClick={changerToInvestidor}
            >
              Investidor
            </ButtonSize>
            <ButtonSize selected={vendedorSelected} onClick={changerToVendedor}>
              Vendedor
            </ButtonSize>
          </ContainerButtonSize>
        ) : (
          <ContainerButton style={{ marginTop: "23px" }}>
            <Button selected={investidorSelected} onClick={changerToInvestidor}>
              Investidor
            </Button>
            <Button selected={vendedorSelected} onClick={changerToVendedor}>
              Vendedor
            </Button>
          </ContainerButton>
        )}
      </ContainerBanner>
    </Container>
  );
};

export default Index;
