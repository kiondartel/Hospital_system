import Search from "antd/es/input/Search";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const SearchAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;
export const StyledSearch = styled(Search)`
  width: 450px;
  margin: 20px 0px 0px 20px;
  border: none;
`;
