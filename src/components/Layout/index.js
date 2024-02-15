import React from "react";
import NavBar from "../NavBar";

import { Container, MainContent, SidebarWrapper } from "./styles";
import { Outlet } from "react-router-dom";
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
    </Container>
  );
};

export default Layout;
