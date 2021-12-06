import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #181a20;

  margin-bottom: 7px;
`;

export const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  border-radius: 10px;

  height: 44px;
  padding-left: 22px;

  display: flex;
  align-items: center;

  border: 1px solid #181a20;
  background: #e5e5e5;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
`;
