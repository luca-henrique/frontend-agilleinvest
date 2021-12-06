import styled from "styled-components";

import Mapa from "~/assets/images/mapa.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 131px;
  @media (max-width: 1260px) {
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 0;
  }

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;

  @media (max-width: 1260px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  align-items: flex-end;

  width: 639px;
  height: 533px;

  background: url(${Mapa});

  background-position: center center;

  background-repeat: no-repeat;

  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 35px;

  @media (max-width: 1260px) {
    margin-top: 30px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Title = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 60px;
  color: #000000;
`;

export const Description = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;

  color: #000000;
`;

export const Button = styled.div`
  display: flex;

  width: 173px;
  height: 41px;

  margin-bottom: 40px;
  margin-right: 60px;

  background: #4dd784;
  border-radius: 32px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #000000;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
