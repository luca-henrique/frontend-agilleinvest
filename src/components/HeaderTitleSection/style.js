import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;
  color: #181a20;
  white-space: nowrap;
  margin-right: 35px;

  @media (max-width: 1260px) {
    font-size: 38px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: #4dd784;
`;
