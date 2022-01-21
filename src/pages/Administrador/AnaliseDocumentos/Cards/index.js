import React from "react";

import {
  Container,
  Header,
  TitlePage,
  SubTitle,
  ContainerCards,
  Card,
  Legend,
  ProcessoResult,
  SituacaoResult,
  PercentContainer,
  PercentResult,
  PercentValue,
  PercentSimbol,
  ContainerInformation,
  Avatar,
  ContainerLabels,
  LabelName,
  LabelEmail,
  ContainerVerify,
  ContainerEmail,
  Label,
  ContainerIcons,
  ContainerPage,
  ContainerItemsPage,
  ChangerPage,
  ContainerIndicePage,
} from "./style";

import { ReactComponent as EyeIcon } from "~/assets/icons/eye-table-action.svg";
import { ReactComponent as EditIcon } from "~/assets/icons/edit-table-action.svg";
import { ReactComponent as DeleteIcon } from "~/assets/icons/delete-table-action.svg";

import { ReactComponent as SuccessIcon } from "~/assets/icons/success.svg";

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

      <ContainerCards>
        {data.map((item) => {
          return (
            <Card>
              <Legend>Processo</Legend>
              <ProcessoResult>{item.numeroProcesso}</ProcessoResult>
              <Legend>Situação</Legend>
              <SituacaoResult>{item.situacao}</SituacaoResult>

              <PercentContainer>
                <PercentResult>
                  <PercentValue>62</PercentValue>
                  <PercentSimbol>%</PercentSimbol>
                </PercentResult>
                <PercentSimbol>Fase 1</PercentSimbol>
              </PercentContainer>

              <ContainerInformation>
                <Avatar />
                <ContainerLabels>
                  <LabelName>{item.nome}</LabelName>
                  <LabelEmail>{item.email}</LabelEmail>
                </ContainerLabels>
              </ContainerInformation>

              <ContainerVerify>
                <ContainerEmail>
                  <Label>Email Verificado</Label>

                  <SuccessIcon />
                </ContainerEmail>

                <ContainerEmail>
                  <Label>Documentos Enviados</Label>

                  <SuccessIcon />
                </ContainerEmail>
              </ContainerVerify>

              <ContainerIcons>
                <EyeIcon />
                <EditIcon />
                <DeleteIcon />
              </ContainerIcons>
            </Card>
          );
        })}
      </ContainerCards>

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
