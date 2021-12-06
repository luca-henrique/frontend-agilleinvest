import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormLabel, FormControl, FormGroup } from "@material-ui/core/";

import StyledText from "~/components/StyledInput/index.jsx";

import { SearchIcon } from "~/assets/icons";

import { Button, ButtonText } from "./style";

import CheckBoxStyled from "~/components/CheckBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        background: "#181A20",
      }}
    >
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{ color: "#4DD784" }}>
          * Pré precatórios
        </FormLabel>
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <CheckBoxStyled label="Municipal" />
          <CheckBoxStyled label="Estadual" />
          <CheckBoxStyled label="Federal" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{ color: "#4DD784" }}>
          * Precatórios
        </FormLabel>
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <CheckBoxStyled label="Municipal" />
          <CheckBoxStyled label="Estadual" />
          <CheckBoxStyled label="Federal" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{ color: "#4DD784" }}>
          * Direitos precatórios
        </FormLabel>
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <CheckBoxStyled label="Ação Trabalhista" />
          <CheckBoxStyled label="Ação Cívil" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{ color: "#4DD784" }}>
          * Busca por Valor
        </FormLabel>
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <StyledText type="text" placeholder="Insira um valor" label="Valor" />
          <div style={{ marginTop: "45px" }}>
            <Button>
              <div
                style={{
                  margin: "9px 0px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div style={{ borderRight: "1px solid #181a20" }}>
                  <div style={{ marginLeft: "13px", marginRight: "13px" }}>
                    <SearchIcon />
                  </div>
                </div>
                <ButtonText>Pesquisar</ButtonText>
              </div>
            </Button>
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Index;
