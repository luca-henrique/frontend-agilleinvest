import styled from "styled-components";

export const Container = styled.div`
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;

  background: #101115;

  border-radius: 5px;
`;

export const Input = styled.input`
  padding-left: 15px;

  height: 100%;
  width: 100%;

  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #6b707e;

  border: 1px solid #4dd784;

  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  background: #101115;
`;

export const ContainerUpload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15px;

  border: 1px solid #4dd784;

  border-left-color: #101115;

  border-radius: 5px;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
