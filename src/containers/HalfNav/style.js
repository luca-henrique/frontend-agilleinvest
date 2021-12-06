import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #181a20;

  color: white;

  @media (max-width: 710px) {
    display: none;
  }
`;

export const Main = styled.div`
  flex-direction: column;
  width: 80%;
  height: 60%;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  justify-items: ${({ center }) => (center ? "center" : "flex-start")};
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  margin-top: 7px;
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1186px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 202px;
`;

export const Title = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;

  text-align: ${({ center }) => (center ? "center" : "none")};

  @media (max-width: 1186px) {
    font-size: 42px;
    line-height: 46px;
  }
`;

export const Description = styled.h4`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-top: 7px;
  text-align: ${({ center }) => (center ? "center" : "none")};
`;
