import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100%;

  background-color: #e5e5e5;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  width: 60%;

  @media (max-width: 1260px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  margin-bottom: 41px;

  @media (max-width: 1260px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 37px;

  color: #181a20;

  margin-bottom: 10px;
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
  width: 100%;
  height: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 231px;

  @media (max-width: 1260px) {
    width: 100%;
  }
`;
