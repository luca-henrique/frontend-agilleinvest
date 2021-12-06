import React from "react";

import { useHistory } from "react-router-dom";
import { Container } from "~/components/Container/";

import {
  ContainerFormStep01,
  IconContainer,
  Icon,
  Title,
  Subtitle,
  OutlineButton,
} from "../style";

import { ReactComponent as LeftIcon } from "~/assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "~/assets/icons/arrow-right.svg";
import { ReactComponent as LineIcon } from "~/assets/icons/line-form-documents.svg";
import { ReactComponent as LogoIcon } from "~/assets/icons/logo.svg";

const Index = ({ changeStep }) => {
  const history = useHistory();

  const goTo = () => {
    history.push("/dashboard");
  };

  return (
    <Container color="primaryBlack">
      <ContainerFormStep01>
        <IconContainer>
          <Icon style={{ background: "#4DD784" }} onClick={changeStep}>
            <LeftIcon style={{ width: "7px" }} />
          </Icon>
          <Icon style={{}}>
            <ArrowRight style={{ width: "7px" }} />
          </Icon>
        </IconContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LogoIcon />
        </div>

        <div
          style={{
            marginTop: "28px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <LineIcon />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              marginTop: "30px",
              display: "flex",
              width: "245px",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Title>Documentação enviada com sucesso</Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Subtitle>Verifique seu email e confirme sua conta.</Subtitle>
          </div>
        </div>

        <div
          style={{
            padding: "0px 67px",
            marginTop: "26px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "32px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "30px",
            }}
          >
            <div style={{ width: "100px" }}>
              <OutlineButton>Cancelar</OutlineButton>
            </div>

            <div style={{ width: "190px" }} onClick={goTo}>
              <OutlineButton>Continuar</OutlineButton>
            </div>
          </div>
        </div>
      </ContainerFormStep01>
    </Container>
  );
};

export default Index;
