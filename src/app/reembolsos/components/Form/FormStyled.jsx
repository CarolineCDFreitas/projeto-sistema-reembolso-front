import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid darkmagenta; */
  margin-top: 1.25rem;
  gap: 0.5rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
