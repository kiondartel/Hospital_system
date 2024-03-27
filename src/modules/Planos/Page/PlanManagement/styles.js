import styled from "styled-components";
import { Card, List } from "antd";

export const StyledCard = styled(Card)`
  margin: 20px;
  border-radius: 10px;
`;

export const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlanName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #003366;
`;

export const PlanValue = styled.span`
  font-size: 14px;

  margin-left: 10px;
`;

export const PlanActions = styled.div`
  display: flex;
  gap: 8px;
`;
