import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LeftContainer from "~/containers/HalfNav";
import Input from "~/components/Input";

import Button from "~/components/Button";
import Label from "~/components/Label";

import Actions from "~/store/ducks/auth";

import {
  Container,
  MainContainer,
  Title,
  Form,
  Description,
  ButtonContainer,
  ContainerTitle,
  SecondPartTitle,
  ContainerDescription,
  Header,
} from "./style";

const data = {
  vendedor: { title: "Olá, Vendedor(a)!" },
  investidor: { title: "Olá, Investidor(a)!" },
};

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const type = localStorage.getItem("@Agille:User");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      fullName,
      email,
      cpf,
      password,
    };

    dispatch(Actions.createUserRequest(user));
  };

  const goTo = () => {
    history.push("/recovery");
  };

  const goToContinueRegistre = () => {
    history.push("/signup-steps");
  };

  return (
    <Container>
      <MainContainer>
        <Header>
          <ContainerTitle>
            <Title>Registre-se na</Title>
            <SecondPartTitle>Agille Invest</SecondPartTitle>
          </ContainerTitle>

          <ContainerDescription>
            <Description>
              Cadastre-se e tenha acesso a nossa plataforma.
            </Description>
          </ContainerDescription>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Input
            label="Nome Completo"
            type="text"
            value={fullName}
            setValue={setFullName}
          />

          <Input
            label="E-mail"
            type="email"
            value={email}
            setValue={setEmail}
          />

          <Input label="CPF" type="text" value={cpf} setValue={setCpf} cpf />

          <Input
            label="Senha"
            type="password"
            value={password}
            setValue={setPassword}
          />

          <Input
            label="Confirmação de senha"
            type="password"
            value={confirmationPassword}
            setValue={setConfirmationPassword}
          />

          <Label onClick={goTo}>Esqueceu a senha?</Label>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <ButtonContainer>
              <Button onClick={goToContinueRegistre}>Registrar</Button>
            </ButtonContainer>
          </div>
        </Form>
      </MainContainer>

      <LeftContainer
        center
        title={data[type].title}
        description="Já possui uma conta cadastrada? Realize o seu login e tenha acesso a melhor plataforma de investimentos em processos judiciais do Brasil."
        label="Logar-se"
        goTo="/signin"
      />
    </Container>
  );
};

export default Index;
