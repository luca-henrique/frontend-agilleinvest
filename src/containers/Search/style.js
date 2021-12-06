import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const ContainerSearchInput = styled.div`
  width: 250px;
  height: 33px;
  left: 1090px;
  top: 137px;

  border: 1px solid #4dd784;
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 23px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  border-right: 1px solid #4dd784;
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  background-color: #181a20;

  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #6b707e;
  padding-left: 15px;
`;
