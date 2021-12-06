import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh important;

  align-items: center;

  margin-top: 50px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  width: 89%;

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

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  background: #2c303a;
  border-radius: 10px;
  padding: 40px 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #181a20;
  border-radius: 20px;
  padding: 13px 42px;

  align-items: center;
  margin: 30px;
`;

export const Legend = styled.h5`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height */

  color: #5a5e68;

  margin-bottom: 2px;
`;

export const ProcessoResult = styled.h4`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;

export const SituacaoResult = styled.h4`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #4dd784;

  margin-bottom: 20px;
`;

export const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;

  border: 3px solid #4dd784;

  padding: 20px;

  border-radius: 50px;
`;

export const PercentResult = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PercentValue = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  color: #ffffff;
`;

export const PercentSimbol = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #6b707e;
`;

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;

  background: #4dd784;
  border-radius: 10px;

  padding: 10px 24px;
`;

export const Avatar = styled.div`
  background: #181a20;
  width: 33px;
  height: 33px;

  border-radius: 20px;
`;

export const ContainerLabels = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;
`;

export const LabelName = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 2px;
  color: #181a20;
`;

export const LabelEmail = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  margin-top: 2px;

  color: #181a20;
`;

export const ContainerVerify = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid #2c303a;
  padding-bottom: 25px;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #2c303a;
  border-radius: 10px;

  padding: 8px 23px;

  width: 102px;
  height: 75px;
`;

export const Label = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;

  margin-bottom: 4px;
`;

export const ContainerIcons = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  align-items: center;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 475.09px;
  height: 39px;

  margin-top: 20px;

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
