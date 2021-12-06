import React from "react";

import { Container, Main } from "./style";

import Footer from "~containers/FooterDashboard";
import Menu from "./Menu";
import Search from "./Search";

const Index = ({ children }) => {
  return (
    <Container color="primaryBlack" justify="column" align="flex-start">
      <Main>
        <Menu />
        <Search />
        <div style={{ width: "100%", height: "100vh" }}>{children}</div>
      </Main>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default Index;
