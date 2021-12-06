import styled from "styled-components";

export const Button = styled.button`
  width: 230px;
  height: 44px;
  background: #4dd784;
  border-radius: 14px;

  display: flex;
  border: none;
`;

export const Input = styled.input`
  height: 44px;
  background: #181a20;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);

  border: 1px solid #4dd784;
  border-radius: 14px;
  color: white;
  padding-left: 25px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;

  color: rgba(255, 255, 255, 0.3);
`;

export const ButtonText = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #181a20;

  justify-items: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
`;

export const SubTitle = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #4dd784;
`;
