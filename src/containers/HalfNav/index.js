import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Main,
  Description,
  Title,
  LogoContainer,
  ButtonContainer,
  DescriptionContainer,
  InformationContainer,
  BodyContainer,
  TitleContainer,
} from "./style";

import { ReactComponent as IconLogo } from "~/assets/icons/logo.svg";
import OutlineButton from "~/components/OutlinedButton";

const Index = ({ title, description, label, center, goTo }) => {
  const history = useHistory();

  const go = () => {
    history.push(goTo);
  };

  return (
    <Container>
      <Main>
        <InformationContainer>
          <LogoContainer>
            <IconLogo style={{ height: "100%", width: "200px" }} />
          </LogoContainer>

          <BodyContainer center={center}>
            <TitleContainer>
              <Title center={center}>{title}</Title>
            </TitleContainer>

            <DescriptionContainer>
              <Description center={center}>{description}</Description>
            </DescriptionContainer>

            <ButtonContainer>
              <OutlineButton icon onClick={go}>
                {label}
              </OutlineButton>
            </ButtonContainer>
          </BodyContainer>
        </InformationContainer>
      </Main>
    </Container>
  );
};

export default Index;
