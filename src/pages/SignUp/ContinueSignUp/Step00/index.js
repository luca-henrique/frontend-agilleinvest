import React from "react";

import { Container } from "~/components/Container/";

import {
  ContainerForm,
  IconContainer,
  Icon,
  Title,
  Subtitle,
  InputContainer,
  Label,
  Input,
  OutlineButton,
} from "../style";

import { ReactComponent as LeftIcon } from "~/assets/icons/arrow-left.svg";

import { ReactComponent as ArrowRight } from "~/assets/icons/arrow-right.svg";

import { ReactComponent as LineIcon } from "~/assets/icons/line-form-documents.svg";

import UploadInput from "~/components/InputUpload/index.jsx";

const Index = ({ changeStep }) => {
  return (
    <Container color="primaryBlack" justify="none">
      <ContainerForm>
        <IconContainer>
          <Icon>
            <LeftIcon style={{ width: "7px" }} />
          </Icon>
          <Icon style={{ background: "#4DD784" }} onClick={changeStep}>
            <ArrowRight style={{ width: "7px" }} />
          </Icon>
        </IconContainer>

        <div style={{ paddingLeft: "38px" }}>
          <Title>Envio de Documentação</Title>
          <Subtitle>Fase I do envio de documentação.</Subtitle>

          <LineIcon style={{ marginTop: "28px", width: "100%" }} />
        </div>

        <div
          style={{
            padding: "0px 67px",
            marginTop: "26px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputContainer>
            <Label>Nome</Label>
            <Input placeholder="Nome Completo" />
          </InputContainer>
          <div style={{ marginTop: "25px" }} />
          <InputContainer>
            <Label>Número do seu processo</Label>
            <Input placeholder="Número do seu processo" />
          </InputContainer>

          <div style={{ marginTop: "25px" }} />

          <UploadInput />

          <div style={{ marginTop: "25px" }} />

          <UploadInput />

          <div style={{ marginTop: "25px" }} />

          <UploadInput />

          <div style={{ marginTop: "30px" }} />

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

            <div style={{ width: "190px" }}>
              <OutlineButton>Enviar documentação</OutlineButton>
            </div>
          </div>
        </div>
      </ContainerForm>
    </Container>
  );
};

export default Index;
