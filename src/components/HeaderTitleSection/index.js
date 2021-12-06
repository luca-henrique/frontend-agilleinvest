import React from "react";

import { Container, Title, Line } from "./style";

const Index = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Line />
    </Container>
  );
};

export default Index;
