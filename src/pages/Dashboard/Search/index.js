import React from "react";

import { Container, ContainerSearchInput, IconContainer, Input } from "./style";

import { ReactComponent as SearchIcon } from "~/assets/icons/search-green.svg";

const Index = () => {
  return (
    <Container>
      <ContainerSearchInput>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <Input type="search" placeholder="Buscar..." />
      </ContainerSearchInput>
    </Container>
  );
};

export default Index;
