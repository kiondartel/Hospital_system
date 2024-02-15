import { Button } from "antd";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  min-height: 70%;
`;

export const SmallInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .smallInput {
    width: 100%;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StepsContainer = styled.div`
  display: flex;
  min-width: 600px;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledButton = styled(Button)``;
