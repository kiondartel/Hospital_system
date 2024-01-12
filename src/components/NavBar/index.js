import React from "react";
import { Nav, StyledLink, AgendarButton } from "./styles";

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/">Início</StyledLink>
      <StyledLink to="/plans">Planos</StyledLink>
      <StyledLink to="/servicos">Clientes</StyledLink>
      <StyledLink to="/contato">Sobre Nós</StyledLink>
      <AgendarButton>Agendar Consulta</AgendarButton>
    </Nav>
  );
};

export default NavBar;
