import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledButton = styled(Button)`
  min-width: 50px;
`;
