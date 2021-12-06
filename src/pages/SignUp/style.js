import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100%;
  background-color: #e5e5e5;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const ContainerDescription = styled.div`
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  width: 232px;
  margin-top: 15px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 37px;

  color: #181a20;
`;

export const SecondPartTitle = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 37px;

  color: #181a20;

  margin-left: 5px;
`;

export const Description = styled.h6`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #181a20;
`;

export const Form = styled.form`
  width: 70%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;
