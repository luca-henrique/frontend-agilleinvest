import React from "react";

import Footer from "~containers/FooterDashboard";
import Menu from "./Menu";
import Search from "./Search";
import Cards from "./Cards";

import { Container, Main } from "./style";

const Index = () => {
  return (
    <Container>
      <Main>
        <Menu />
        <Search />
        <Cards />
      </Main>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default Index;
