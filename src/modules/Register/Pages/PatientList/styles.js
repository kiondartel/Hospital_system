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
  padding: 15px;
  h3 {
    color: #676a6c;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-weight: bold;
  }
`;
export const SearchAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
export const StyledSearch = styled(Search)`
  width: 450px;
  margin: 20px 0px 0px 20px;
  border: none;
`;
