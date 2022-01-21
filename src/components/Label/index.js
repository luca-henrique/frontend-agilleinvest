import React from "react";
import { Label } from "./style";

const Index = ({ children, onClick }) => {
  return <Label onClick={onClick}>{children}</Label>;
};

export default Index;
