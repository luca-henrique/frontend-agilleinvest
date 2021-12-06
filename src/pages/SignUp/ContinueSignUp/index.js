import React, { useState } from "react";

import { Container } from "~/components/Container/";

import Footer from "~containers/FooterDashboard";

import Step from "./Step00";

import Step1 from "./Step01";

const Index = () => {
  const [step, setStep] = useState(true);

  const changeStep = () => {
    setStep(!step);
  };

  return (
    <Container color="primaryBlack">
      {step ? (
        <Step changeStep={changeStep} />
      ) : (
        <Step1 changeStep={changeStep} />
      )}
      <Footer />
    </Container>
  );
};

export default Index;
