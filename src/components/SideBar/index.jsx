import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaClipboardList,
  FaDollarSign,
  FaHome,
  FaCapsules,
  FaNotesMedical,
  FaCalendarAlt,
} from "react-icons/fa";
import { UserPhoto, SidebarContainer, StyledMenu, MenuWrapper } from "./styles";
import { Divider, Menu } from "antd";
import MenuItem from "../MenuItem";

const MenuItemLink = ({ to, children }) => (
  <Link style={{ color: "#fff" }} to={to}>
    {children}
  </Link>
);
const { SubMenu } = Menu;

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <SidebarContainer>
      <UserPhoto />
      <p>Gabriel Lucas</p>
      <p>{`(Administrador)`}</p>
      <Divider />
      <MenuWrapper>
        <StyledMenu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          <Menu.Item key="0">
            <MenuItem
              icon={<FaHome color="white" />}
              label="Dashboard"
              to="/"
            />
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <MenuItem icon={<FaUserMd color="white" />} label="Pacientes" />
            }
          >
            <Menu.Item key="1">
              <MenuItemLink to="/patient/list">Lista de Pacientes</MenuItemLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <MenuItem
                icon={<FaClipboardList color="white" />}
                label="Planos"
              />
            }
          >
            <Menu.Item key="3">
              <MenuItemLink to="/plans">Gestão de planos</MenuItemLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <MenuItem
                icon={<FaDollarSign color="white" />}
                label="Recursos Humanos"
              />
            }
          >
            <Menu.Item key="4">
              <MenuItemLink to="/financeiro/clients">
                Colaboradores
              </MenuItemLink>
            </Menu.Item>
            <Menu.Item key="5">
              <MenuItemLink to="/financeiro">Fechamento do mês</MenuItemLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <MenuItem
                icon={<FaCalendarAlt color="white" />}
                label="Consultas"
              />
            }
          >
            <Menu.Item key="6">
              <MenuItemLink to="/appointment-history">
                Histórico de Consultas
              </MenuItemLink>
            </Menu.Item>
            <Menu.Item key="7">
              <MenuItemLink to="/appointment-modification">
                Cancelamento/Reagendamento
              </MenuItemLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub5"
            title={
              <MenuItem
                icon={<FaNotesMedical color="white" />}
                label="Prontuários Médicos"
              />
            }
          >
            <Menu.Item key="8">
              <MenuItemLink to="/medical-records-access">
                Prontuários
              </MenuItemLink>
            </Menu.Item>
            <Menu.Item key="9">
              <MenuItemLink to="/patient-medical-history">
                Histórico Médico do Paciente
              </MenuItemLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub6"
            title={
              <MenuItem
                icon={<FaCapsules color="white" />}
                label="Farmácia - Medicamentos"
              />
            }
          >
            <Menu.Item key="10">
              <MenuItemLink to="/medication-stock-management">
                Estoque de Medicamentos
              </MenuItemLink>
            </Menu.Item>
            <Menu.Item key="11">
              <MenuItemLink to="/medication-purchase-requests">
                Solicitações de Compra
              </MenuItemLink>
            </Menu.Item>
          </SubMenu>
        </StyledMenu>
      </MenuWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
