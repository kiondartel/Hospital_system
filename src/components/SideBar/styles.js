import styled from "styled-components";
import user from "../../assets/image/gabriel.jpg";
import { Menu } from "antd";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const UserPhoto = styled.img`
  content: url(${user});
  max-width: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const StyledMenu = styled(Menu)`
  background-color: #fff;
  margin-top: 10px;
  width: 250px;
  .ant-menu-submenu-open,
  .ant-menu-item-selected {
    border-left: 4px solid purple;
    background-color: #fff;
  }
  .ant-menu-item {
    border-left: 4px solid transparent !important;
  }
`;
