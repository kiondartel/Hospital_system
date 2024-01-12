import React from "react";
import NavBar from "../NavBar";

import { Container, Content } from "./styles";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
