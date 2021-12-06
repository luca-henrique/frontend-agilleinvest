import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Link = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
  margin: 0px 23px;

  &:first-child {
    margin-left: 0px;
  }
`;

export const User = styled.h2`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #ffffff;
`;

export const LinkUser = styled.h5`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #4dd784;

  margin: 6px 7px 0px 7px;
`;

export const Separator = styled.h5`
  color: #fff;
  font-size: 22px;
`;
