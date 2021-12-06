import React from "react";

import Drawer from "@material-ui/core/Drawer";
import { useHistory } from "react-router-dom";
import {
  Container,
  Main,
  Button,
  ButtonContained,
  ContainerButton,
  ContainerMenuIcon,
  IconContainer,
} from "./style";

import { ReactComponent as IconLogo } from "~/assets/icons/logo.svg";

import { ReactComponent as IconMenu } from "~/assets/icons/menu.svg";

const Index = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goTo = (location) => {
    history.push(`${location}`);
  };

  const menu = (
    <div
      style={{
        backgroundColor: "#181a20",
        height: "100%",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Button>Quem somos</Button>
        <Button>Como fazemos</Button>
        <Button>Para quem</Button>
        <Button>FAQ</Button>
        <Button>Contato</Button>
        <Button>Blog</Button>
      </div>

      <div>
        <ButtonContained onClick={() => goTo("signin")}>Entrar</ButtonContained>
        <ButtonContained onClick={() => goTo("signup")}>
          Agilize meu processo
        </ButtonContained>
      </div>
    </div>
  );

  return (
    <Container>
      <Main>
        <IconContainer>
          <IconLogo style={{ width: "100%" }} />
        </IconContainer>
        <ContainerButton>
          <Button>Quem somos</Button>
          <Button>Como fazemos</Button>
          <Button>Para quem</Button>
          <Button>FAQ</Button>
          <Button>Contato</Button>
          <Button>Blog</Button>

          <ButtonContained onClick={() => goTo("signin")}>
            Entrar
          </ButtonContained>
          <ButtonContained onClick={() => goTo("signup")}>
            Agilize meu processo
          </ButtonContained>
        </ContainerButton>

        <ContainerMenuIcon onClick={handleMenu}>
          <IconMenu
            style={{ backgroundColor: "white" }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          />
          <Drawer
            anchor="left"
            open={open}
            onClose={handleClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {menu}
          </Drawer>
        </ContainerMenuIcon>
      </Main>
    </Container>
  );
};

export default Index;
