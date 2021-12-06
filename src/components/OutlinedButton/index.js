import React from "react";

import { Container } from "./style";

import { ReactComponent as ArrowRight } from "~/assets/icons/arrow-right-simple.svg";

const Index = ({ children, icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      {children}
      {icon && <ArrowRight style={{ marginLeft: "15px", fill: "#4dd784" }} />}
    </Container>
  );
};

export default Index;
