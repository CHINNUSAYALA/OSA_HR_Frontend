import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 50%;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: right;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: auto;
  }
`;
