import styled from "styled-components";
import medical from "../../assets/image/backgroundnav.jpg";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2a9df4;
`;

export const Background = styled.img`
  content: url(${medical});
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;
