import React from "react";

import { Container } from "~/components/Container/";

import Footer from "~containers/FooterDashboard";
import Menu from "./Menu";
import Search from "./Search";
import Table from "./Table";

const Index = () => {
  return (
    <Container color="primaryBlack" justify="column" align="flex-start">
      <Container color="primaryBlack" justify="column" padding={60}>
        <Menu />
        <Search />
        <Table />
      </Container>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default Index;
