import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid darkmagenta; */
  margin-top: 1.25rem;
  gap: 0.05rem;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;

    &:last-of-type {
      &::before {
        content: " ";
        width: 0.0625rem;
        height: 11.5rem;
        background-color: #cbd4e1;
        position: absolute;
        top: 6%;
        left: 39.8%;
      }
    }
  }
`;
