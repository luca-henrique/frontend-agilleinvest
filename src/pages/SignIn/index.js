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
  Main,
  FormContainer,
  Title,
  Description,
  Form,
  Header,
  ButtonContainer,
} from "./style";

const Index = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Actions.signInRequest(email, password));
  };

  const goTo = () => {
    history.push("/recovery");
  };

  return (
    <Container>
      <LeftContainer
        title="Bem vindo(a) novamente!"
        description=" Ainda não criou uma conta? Registre-se e tenha acesso a melhor
          plataforma de investimentos em processos judiciais do Brasil."
        label="Cadastrar"
        goTo="/signup"
      />

      <Main>
        <FormContainer>
          <Header>
            <Title>Logue-se na Agille Invest</Title>
            <Description>
              Acesse sua conta e aproveite as milhares de opções de investimento
              em processos judiciais.
            </Description>
          </Header>

          <Form onSubmit={onSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              setValue={setEmail}
            />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              setValue={setPassword}
            />

            <Label onClick={goTo}>Esqueceu a senha?</Label>
            <ButtonContainer>
              <Button type="submit">Entrar</Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Main>
    </Container>
  );
};

export default Index;
