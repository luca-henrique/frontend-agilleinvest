import React from "react";

import {
  Container,
  Main,
  NomeEmpresa,
  InformacoesEmpresa,
  Menu,
  DevelopmentText,
  ContainerMenu,
} from "./style";

import { ReactComponent as IconLogo } from "~/assets/icons/logo.svg";

const Index = () => {
  return (
    <Container>
      <Main>
        <ContainerMenu>
          <IconLogo />

          <NomeEmpresa>Agille Invest © 2021</NomeEmpresa>
          <InformacoesEmpresa>Todos os direitos reservados</InformacoesEmpresa>
        </ContainerMenu>

        <ContainerMenu>
          <Menu>Quem somos</Menu>
          <Menu>Como fazemos</Menu>
          <Menu>Para quem</Menu>
          <Menu>FAQ</Menu>
        </ContainerMenu>

        <ContainerMenu>
          <Menu>Contato</Menu>
          <Menu>Blog</Menu>
          <Menu>Plataforma</Menu>
          <Menu>Agilize meu processo</Menu>
        </ContainerMenu>

        <ContainerMenu>
          <Menu>Cookies</Menu>
          <Menu>Privacidade</Menu>
          <DevelopmentText>
            Desenvolvido por <h4>EXPN</h4>
          </DevelopmentText>
        </ContainerMenu>
      </Main>
    </Container>
  );
};

export default Index;
