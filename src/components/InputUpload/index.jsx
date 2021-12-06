import React from "react";

import {
  Container,
  InputContainer,
  Label,
  Input,
  ContainerUpload,
} from "./style";

import { ReactComponent as IconUpload } from "~/assets/icons/upload.svg";

const Index = () => {
  return (
    <Container>
      <Label>Documento 1</Label>
      <InputContainer>
        <Input placeholder="Procurar arquivo..." />
        <ContainerUpload>
          <IconUpload />
          <Label
            style={{
              textAlign: "center",
              color: "#4dd784",
              marginLeft: "6px",
              marginBottom: "0px",
            }}
          >
            Enviar
          </Label>
        </ContainerUpload>
      </InputContainer>
    </Container>
  );
};

export default Index;
