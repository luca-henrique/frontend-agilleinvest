import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 100%;
  background-color: #181a20;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 440px) {
    height: 80px;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 120px;
  height: 60px;

  @media (max-width: 440px) {
    width: 120px;
    height: 60px;
    margin-left: 30px;
    padding: 10px;
  }
`;

export const Button = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  height: 19px;

  color: #ffffff;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  margin-left: 22px;
  margin-right: 22px;
`;

export const ButtonContained = styled.div`
  height: 36px;
  border: 1px solid #4dd784;
  border-radius: 20px;

  padding: 9px 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  margin-right: 19px;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1283px) {
    display: none;
  }
`;

export const ContainerMenuIcon = styled.div`
  cursor: pointer;

  @media (min-width: 1283px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  @media (max-width: 440px) {
    height: 80px;
    width: 110px;
  }
`;
