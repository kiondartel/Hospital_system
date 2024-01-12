import React from "react";
import NavBar from "../NavBar";

import { Container, MainContent, SidebarWrapper } from "./styles";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../SideBar";

const Layout = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
        <MainContent>
          <NavBar />
          <Outlet />
        </MainContent>
      </SidebarWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;
