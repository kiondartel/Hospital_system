import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaClipboardList, FaDollarSign } from "react-icons/fa";
import {
  UserPhoto,
  SidebarContainer,
  StyledMenu,
  Links,
  LinksContainer,
} from "./styles";

const MenuItemLink = ({ to, children }) => <Link to={to}>{children}</Link>;

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const menuItems = [
    {
      label: (
        <LinksContainer>
          <FaUserMd color="white" />
          <Links>Pacientes</Links>
        </LinksContainer>
      ),
      key: "sub1",
      children: [
        {
          label: (
            <MenuItemLink to="/patient/list">Lista de Pacientes</MenuItemLink>
          ),
          key: "1",
        },
      ],
    },
    {
      label: (
        <LinksContainer>
          <FaClipboardList color="white" />
          <Links>Planos</Links>
        </LinksContainer>
      ),
      key: "sub2",
      children: [
        {
          label: <MenuItemLink to="/plans">Gestão de planos</MenuItemLink>,
          key: "3",
        },
      ],
    },
    {
      label: (
        <LinksContainer>
          <FaDollarSign color="white" />
          <Links>Financeiro</Links>
        </LinksContainer>
      ),
      key: "sub3",
      children: [
        {
          label: (
            <MenuItemLink to="/financeiro/clients">Colaboradores</MenuItemLink>
          ),
          key: "4",
        },
        {
          label: (
            <MenuItemLink to="/financeiro">Fechamento do mes</MenuItemLink>
          ),
          key: "5",
        },
      ],
    },
  ];

  return (
    <SidebarContainer>
      <UserPhoto />
      <p>Gabriel Lucas</p>
      <StyledMenu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={menuItems}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
