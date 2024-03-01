import styled from "styled-components";

export const LinksContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
export const Links = styled.label`
  color: #ffff;

  &.active {
    color: red;
  }
`;
