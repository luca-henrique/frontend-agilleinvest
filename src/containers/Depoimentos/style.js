import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 564px;
  background: #181a20;
`;

export const Main = styled.div`
  display: flex;
  width: 90%;
`;

export const Item = styled.div`
  width: 308px;
  height: 335.79px;

  background: #4dd784;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  margin-top: 35px;
  padding: 30px;
  margin-bottom: 75px;

  @media (max-width: 640px) {
    width: 100%;
    padding: 10px;
    height: 280px;
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;

  color: #ffffff;

  margin-top: 60px;

  @media (max-width: 640px) {
    margin-top: 30px;
  }
`;

export const Description = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #181a20;

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 17px;
  }
`;

export const Autor = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: right;

  color: #181a20;
`;

export const Tipo = styled.h5`
  font-family: Roboto;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;

  color: #181a20;
`;
