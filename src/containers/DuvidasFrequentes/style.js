import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  width: 850px;
  height: 55px;

  background: ${({ select }) => (select ? "#4dd784" : "#E5E5E5")};
  border: ${({ select }) => (select ? "none" : "2px solid #4dd784")};

  border-radius: 48px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  text-align: center;
  justify-content: center;
  align-items: center;

  margin: 13px 0px;

  @media (max-width: 1260px) {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 850px;
  height: 114px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  text-align: center;
  justify-content: center;
  align-items: center;

  background: #4dd784;
  border: 3px solid #4dd784;
  border-radius: 15px;

  padding: 10px;

  @media (max-width: 1260px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;
