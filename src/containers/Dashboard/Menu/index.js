import React from "react";

import { Container, Link, LinkUser, User, Separator } from "./style";

import { ReactComponent as Logo } from "~/assets/icons/logo.svg";

const Index = () => {
  return (
    <Container>
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #2C303A",
            height: "100%",
            marginLeft: "50px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link>Iniciar</Link>
            <Link>Configurações</Link>
            <Link>Usuários</Link>
            <Link>Precatórios</Link>
            <Link>Sobre</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <User>Olá, Administrador(a)!</User>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <LinkUser>Perfil</LinkUser>
              <Separator>|</Separator>
              <LinkUser>Sair</LinkUser>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
