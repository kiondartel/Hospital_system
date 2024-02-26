import styled from "styled-components";
import user from "../../assets/image/gabriel.jpg";
import { Menu } from "antd";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f4050;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  p {
    color: #dfe4ed;
    font-weight: 600;
  }
`;

export const UserPhoto = styled.img`
  content: url(${user});
  max-width: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const LinksContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  width: 250px;
  .ant-menu-submenu-open,
  .ant-menu-item-selected {
    border-left: 4px solid #5c40ff;
    background-color: #ffff;
  }
  .ant-menu-item {
    border-left: 4px solid transparent !important;
  }
`;
