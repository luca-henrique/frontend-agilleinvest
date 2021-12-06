import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  padding: 30px;

  @media (max-width: 1260px) {
    margin-right: 0px;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 525px;
  height: 337px;
  background: ${({ changer }) =>
    changer
      ? "linear-gradient(67.81deg, #4dd784 0%, #6fffa8 98.19%)"
      : "linear-gradient(247.61deg, #282B33 0%, #181A20 100%);"};
  border-radius: 37px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const CircleIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 97px;
  height: 97px;
  background: #ffffff;

  border-radius: 50px;

  @media (max-width: 430px) {
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  margin-top: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;

  color: ${({ changer }) => (changer ? "#191B21" : "#ffffff")};

  @media (max-width: 430px) {
    width: 100%;
    text-align: center;
    margin-top: 14px;
  }
`;

export const Description = styled.div`
  margin-top: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  width: 400px;

  color: ${({ changer }) => (changer ? "#191B21" : "#ffffff")};

  @media (max-width: 430px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Button = styled.div`
  height: 41px;

  border: 1px solid #000000;
  border-radius: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  width: 173px;

  color: #000000;

  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
