import styled from "styled-components";

import BackgroundBanner from "~assets/images/banner.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerBanner = styled.div`
  height: 450px;
  position: absolute;
  top: 55px;
  width: 90%;
  border-radius: 28px;

  background: url(${BackgroundBanner}) #181a20;

  background-position: center center;

  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: Roboto Condensed;
  font-weight: 300;
  font-style: normal;
  font-size: 64px;
  line-height: 75px;
  color: white;

  @media (max-width: 860px) {
    font-size: 44px;
    line-height: 54px;
  }

  @media (max-width: 440px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const SubTitle = styled.h1`
  font-family: Roboto Condensed;
  font-weight: 300;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  color: white;

  margin-top: 10px;

  @media (max-width: 860px) {
    font-size: 26px;
    line-height: 28px;
  }

  @media (max-width: 440px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;

  width: 352px;
  height: 64px;

  @media (max-width: 440px) {
    flex-direction: column;
    height: 80px;
    width: 80%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#4DD784" : "transparent")};
  color: ${(props) => (props.selected ? "#181A20" : "#4DD784")};

  border-radius: ${(props) => (props.selected ? "40" : "0")}px;

  border: 1px solid ${(props) => (props.selected ? "none" : "#4DD784")};

  border-radius: 40px;

  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  @media (max-width: 440px) {
    margin-bottom: 10px;
  }
`;

export const ContainerButtonSize = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #4dd784;
  border-radius: 40px;
  width: 352px;
  height: 64px;
`;

export const ButtonSize = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#4DD784" : "transparent")};
  color: ${(props) => (props.selected ? "#181A20" : "#4DD784")};
  border-radius: ${(props) => (props.selected ? "40" : "0")}px;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`;
