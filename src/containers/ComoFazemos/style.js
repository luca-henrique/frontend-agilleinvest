import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
`;

export const Item = styled.div`
  width: 306px;
  height: 299px;
  margin-bottom: 90px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 440px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ContainerItem = styled.div``;

export const Image = styled.div`
  width: 117px;
  height: 117px;
  background: #c4c4c4;
  border-radius: 58.5px;

  @media (max-width: 440px) {
    width: 100px;
    height: 100px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  width: 42px;
  height: 42px;
  background: #4dd784;
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`;

export const CircleText = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #181a20;
  text-align: center;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #181a20;
  text-align: center;
  width: 100%;
  margin-top: 48px;
`;

export const Description = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: #181a20;
  text-align: center;
  margin-top: 23px;
`;
