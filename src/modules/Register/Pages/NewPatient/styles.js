import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
export const FormContent = styled.div`
  display: flex;

  background-color: #fff;
  padding: 20px;
  min-height: 500px;
  border-top: 3px solid #e7eaec;
  border-radius: 10px;
  margin-top: 3rem;
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
export const Planos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;
