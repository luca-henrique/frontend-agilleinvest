import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-left: 25px;
  align-content: center;

  @media (max-width: 1260px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1260px) {
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
  }
`;

export const CardSize = styled.div`
  width: 426px;
  height: 84px;

  @media (max-width: 430px) {
    width: 90%;
    height: 100%;
  }
`;

export const CardText = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #767676;
`;

export const ImageCard = styled.div`
  width: 430px;
  height: 242px;
  border-radius: 33px;
  margin-top: 35px;

  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 563px;
  margin-left: 194px;

  @media (max-width: 1260px) {
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
  text-align: center;
  margin: 10px;
`;

export const TitleItem = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #181a20;
  margin-top: 13px;
`;

export const DescriptionItem = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #767676;
  margin-top: 16px;
`;
