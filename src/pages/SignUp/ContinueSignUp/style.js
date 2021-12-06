import styled from "styled-components";

export const ContainerForm = styled.div`
  background: #101115;
  width: 454px;
  border-radius: 20px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;

export const ContainerFormStep01 = styled.div`
  background: #101115;
  width: 494px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  padding-right: 20px;
`;

export const Icon = styled.div`
  width: 23px;
  height: 23px;
  background: #282b33;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin: 4px;
`;

export const Title = styled.h2`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: #ffffff;
`;

export const Subtitle = styled.h5`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #6b707e;

  margin-top: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
`;

export const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #4dd784;
  box-sizing: border-box;

  height: 40px;
  padding-left: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #6b707e;

  background: #101115;
  border-radius: 5px;
`;

export const OutlineButton = styled.button`
  background: #181a20;

  border-radius: 27px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #4dd784;

  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;

  border: 1px solid #4dd784;

  padding: 8px 23px;

  width: 100%;

  cursor: pointer;
`;
