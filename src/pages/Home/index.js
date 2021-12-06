import React from "react";

import Menu from "~/containers/MenuTop";

import Banners from "~/containers/Banners";

import QuemSomos from "~/containers/QuemSomos";
import ComoFazemos from "~/containers/ComoFazemos";
import ParaQuem from "~/containers/ParaQuem";

import Depoimentos from "~/containers/Depoimentos";
import DuvidasFrequentes from "~/containers/DuvidasFrequentes";
import FaleConosco from "~/containers/FaleConosco";

import Footer from "~/containers/Footer";

import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Menu />

      <Banners />

      <QuemSomos />

      <ComoFazemos />

      <ParaQuem />

      <Depoimentos />

      <DuvidasFrequentes />

      <FaleConosco />

      <Footer />
    </Container>
  );
};

export default Home;
