import React from "react";

import {
  Container,
  Table,
  Title,
  Line,
  Column,
  Header,
  TitlePage,
  SubTitle,
  ContainerPage,
  ContainerItemsPage,
  ChangerPage,
  ContainerIndicePage,
} from "./style";

import { ReactComponent as EyeIcon } from "~/assets/icons/eye-table-action.svg";
import { ReactComponent as EditIcon } from "~/assets/icons/edit-table-action.svg";
import { ReactComponent as DeleteIcon } from "~/assets/icons/delete-table-action.svg";

const data = [
  {
    nome: "João Pedro da Silva",
    email: "joao.pedro@hotmail.com",
    numeroProcesso: "52566100",
    situacao: "Envio de documentos Fase 1",
    data: "11/05/2021",
  },
  {
    nome: "João Pedro da Silva",
    email: "joao.pedro@hotmail.com",
    numeroProcesso: "52566100",
    situacao: "Envio de documentos Fase 1",
    data: "11/05/2021",
  },
  {
    nome: "João Pedro da Silva",
    email: "joao.pedro@hotmail.com",
    numeroProcesso: "52566100",
    situacao: "Envio de documentos Fase 1",
    data: "11/05/2021",
  },
  {
    nome: "João Pedro da Silva",
    email: "joao.pedro@hotmail.com",
    numeroProcesso: "52566100",
    situacao: "Envio de documentos Fase 1",
    data: "11/05/2021",
  },
];

const Index = () => {
  return (
    <Container>
      <Header>
        <TitlePage>Análise de Documentação</TitlePage>
        <SubTitle>Fase I do envio de documentação.</SubTitle>
      </Header>

      <Table>
        <tr>
          <Title>Nome</Title>
          <Title>Email</Title>
          <Title>Número do processo</Title>
          <Title>Situação</Title>
          <Title>Data</Title>
          <Title />
        </tr>

        {data.map((item) => {
          return (
            <Line>
              <Column>{item.nome}</Column>
              <Column>{item.email}</Column>
              <Column>{item.numeroProcesso}</Column>
              <Column>{item.situacao}</Column>
              <Column>{item.data}</Column>
              <Column>
                <EyeIcon style={{ marginRight: "18px" }} />
                <EditIcon style={{ marginRight: "18px" }} />
                <DeleteIcon />
              </Column>
            </Line>
          );
        })}
      </Table>

      <ContainerPage>
        <ChangerPage>Anterior</ChangerPage>
        <ContainerItemsPage>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(
            (item, index) => {
              return (
                <ContainerIndicePage selected={index === 3}>
                  {item}
                </ContainerIndicePage>
              );
            }
          )}
        </ContainerItemsPage>

        <ChangerPage>Próximo</ChangerPage>
      </ContainerPage>
    </Container>
  );
};

export default Index;
