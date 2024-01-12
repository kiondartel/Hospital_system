import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../assets/image/gabriel.jpg";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const UserPhoto = styled.img`
  content: url(${user});
  max-width: 70px;
  border-radius: 50%;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;
