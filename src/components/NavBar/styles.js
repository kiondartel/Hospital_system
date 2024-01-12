import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2a9df4;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
`;

export const AgendarButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
