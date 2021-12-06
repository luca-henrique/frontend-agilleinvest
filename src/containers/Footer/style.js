import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  align-items: center;
  justify-content: center;

  height: 271px;
  width: 100%;

  background: #181a20;

  @media (max-width: 970px) {
    height: 100%;
  }

  @media (max-width: 440px) {
    padding: 30px 0px;
  }
`;

export const Main = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-content: center;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 970px) {
    flex-direction: column;

    align-content: center;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const NomeEmpresa = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 970px) {
    margin-top: 20px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 970px) {
    margin-top: 20px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 440px) {
    margin-top: 20px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`;

export const InformacoesEmpresa = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  @media (max-width: 970px) {
    margin-top: 10px;
  }
`;

export const Menu = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-top: 5px;

  @media (max-width: 970px) {
    margin-top: 10px;
  }
`;

export const DevelopmentText = styled.h4`
  display: flex;
  flex-direction: row;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-top: 15px;

  h4 {
    margin-left: 5px;
    font-style: bold;
    font-weight: 500;
  }

  @media (max-width: 970px) {
    margin-top: 10px;
  }
`;
