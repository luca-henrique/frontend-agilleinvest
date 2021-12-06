import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;

  margin-top: 50px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  width: 89%;

  margin: 27px 0px;

  border-bottom: 1px solid #2c303a;
  padding-bottom: 22px;
  margin-left: 20px;
`;

export const TitlePage = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;

  color: #ffffff;

  margin-bottom: 6px;
`;

export const SubTitle = styled.h4`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6b707e;
`;

export const Table = styled.table`
  background: #2c303a;
  border-radius: 10px;

  width: 90%;
  border-collapse: collapse;
  padding: 0px 10px 19px 10px;

  border-collapse: separate;
  border-spacing: 0 12px;
`;

export const Title = styled.th`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
  padding: 0px 22px;
  text-align: left;
`;

export const Line = styled.tr`
  background: #181a20;
  border-radius: 5px;
  border: none;
  padding: 15px;
`;

export const Column = styled.td`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  padding: 15px 22px;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 475.09px;
  height: 39px;

  margin-top: 25px;

  background: #2c303a;
  border-radius: 20px;

  padding: 0px 21px;
`;

export const ContainerItemsPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ContainerIndicePage = styled.div`
  display: flex;

  padding: 7px 10px;

  background: ${({ selected }) => (selected ? "#181A20" : "none")};
  border-radius: ${({ selected }) => (selected ? 20 : "none")}px;

  font-family: Roboto Condensed;
  font-style: normal;
  font-size: 18px;

  color: #4dd784;
`;

export const IndicePage = styled.h6`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.35em;

  color: #4dd784;
`;

export const ChangerPage = styled.h5`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #4dd784;
`;
