import { Button } from "antd";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid red;
`;

export const StepsContainer = styled.div`
  display: flex;
  min-width: 600px;

  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  gap: 20px;
`;
