import styled from "styled-components";
import user from "../../assets/image/gabriel.jpg";
import { Menu } from "antd";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f4050;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  p {
    color: #dfe4ed;
    font-weight: bold;
  }
`;
export const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
`;
export const UserPhoto = styled.img`
  content: url(${user});
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  margin-top: 3rem;
`;

export const Links = styled.label`
  color: #ffff;

  &.active {
    color: red;
  }
`;

export const StyledMenu = styled(Menu)`
  background-color: #293846;
  margin-top: 10px;
  width: 100%;

  border-radius: 10px;

  /* Estilos para as setas do submenu */
  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    background-color: white !important;
  }

  /* Estilos para os itens do submenu */
  .ant-menu-sub:not(.ant-menu-submenu-disabled) .ant-menu-item {
    color: #a7b1c2;
  }
  .ant-menu-item-active,
  .ant-menu-item-selected {
    background-color: #293846 !important;
  }
  .ant-menu-submenu-open,
  .ant-menu-item-selected {
    border-left: 4px solid #fff;
  }
  .ant-menu-item {
    border-left: 4px solid transparent !important;
  }
  .ant-menu-submenu-title {
    padding: 30px;
  }
`;
