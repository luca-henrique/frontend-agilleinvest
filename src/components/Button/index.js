import React from "react";
import { Button } from "./style";

const Index = ({ children, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Index;
