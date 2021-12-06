import styled from "styled-components";

import { Colors } from "~/common/colors";

export const Container = styled.div`
  display: flex;
  background: ${(props) => (props.color ? Colors[props.color] : "white")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding || 0}px;
  margin: ${(props) => props.margin || 0}%;
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.width || 100}vh;
  align-items: ${(props) => props.align || "center"};
`;

export const StyledContainer = styled.div`
  background: ${(props) => (props.color ? Colors[props.color] : "white")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.padding || 0}px;
  width: ${(props) => props.width || 100}%;
  align-items: ${(props) => props.align || "center"};
`;

export const ContainerBanner = styled.div`
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.padding || 0}px;
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 100}%;
  align-items: ${(props) => props.align || "center"};

  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
  border-radius: 28px;
`;
