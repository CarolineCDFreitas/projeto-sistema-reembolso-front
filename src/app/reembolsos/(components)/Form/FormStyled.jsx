import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid darkmagenta; */
  margin-top: 1.25rem;
  gap: 0.5rem;
  padding-bottom: 0.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  background-color: #ffe4ea;
  border: solid #a60b2f;
  border-width: 0 0 0 6px;
  color: #a60b2f;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: ${({ compactSpace }) => (compactSpace ? "7.5rem" : "max-content")};
  padding: 0.25rem;
  top: 94%;
  left: 0;
  visibility: ${({ hasError }) => (hasError ? "visible" : "hidden")};
`;
