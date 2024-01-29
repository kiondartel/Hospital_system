import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaClipboardList, FaDollarSign } from "react-icons/fa";
import { UserPhoto, SidebarContainer, StyledMenu } from "./styles";

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
        <span>
          <FaUserMd />
          <span>Pacientes</span>
        </span>
      ),
      key: "sub1",
      children: [
        {
          label: <MenuItemLink to="/">Novo Paciente</MenuItemLink>,
          key: "1",
        },
        {
          label: (
            <MenuItemLink to="/pacientes/lista">
              Lista de Pacientes
            </MenuItemLink>
          ),
          key: "2",
        },
      ],
    },
    {
      label: (
        <span>
          <FaClipboardList />
          <span>Planos</span>
        </span>
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
        <span>
          <FaDollarSign />
          <span>Financeiro</span>
        </span>
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
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={menuItems}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
