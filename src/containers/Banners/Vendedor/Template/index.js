import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormGroup } from "@material-ui/core/";

import { useHistory } from "react-router-dom";
import StyledText from "~/components/StyledInput/index.jsx";

import { ReactComponent as SendIcon } from "~/assets/icons/send-icon.svg";

import { Button, ButtonText } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Index = () => {
  const history = useHistory();

  const goTo = () => {
    history.push("/signup");
  };

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
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <StyledText
            type="text"
            placeholder="Nome e Sobrenome"
            label="Nome"
            style={{ marginBottom: "35px" }}
          />
          <div style={{ marginTop: "35px" }}>
            <StyledText
              type="text"
              placeholder="Insira o Estado"
              label="Estado"
            />
          </div>
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup style={{ marginLeft: "23px", marginTop: "15px" }}>
          <StyledText
            type="email"
            placeholder="Insira seu e-mail"
            label="Email"
          />
          <div style={{ marginTop: "35px" }}>
            <StyledText
              type="text"
              placeholder="Insira seu telefone"
              label="Telefone"
            />
          </div>
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup
          style={{ marginLeft: "23px", marginTop: "15px", width: "280px" }}
        >
          <StyledText
            type="text"
            placeholder="Insira o numero do processo"
            label="Processo"
          />
          <Button style={{ marginTop: "35px", width: "100%" }} onClick={goTo}>
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
                  <SendIcon />
                </div>
              </div>
              <ButtonText>Receber Oferta</ButtonText>
            </div>
          </Button>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Index;
