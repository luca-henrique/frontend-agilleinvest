import React from "react";

import { Container, Main } from "./style";

import Title from "~/components/HeaderTitleSection";

const Index = ({ title, children }) => {
  return (
    <Container>
      <Main>
        <Title title={title} />
        {children}
      </Main>
    </Container>
  );
};

export default Index;
