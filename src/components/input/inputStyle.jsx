import styled from "@emotion/styled";
import Link from "next/link";

export const InputArea = styled.input`
  margin-block-end: 0.7rem;
  height: 2.815rem;
  width: 22.925rem;
  padding: 0.75rem 0.825rem;
  border-radius: 0.375rem;
  border: ${({ hasError }) =>
    hasError ? "0.125rem solid #A60B2F" : "0.05rem solid #CBD4E1"};

  &::placeholder-shown {
    color: black;
  }

  &:hover {
    border: ${({ hasError }) =>
      hasError ? "0.125rem solid #A60B2F" : "0.05rem solid #23282f"};
    border-radius: 0.375rem;
  }

  &:focus,
  &:active {
    outline: ${({ hasError }) =>
      hasError ? " 0 solid transparent" : "0.255rem solid #cbd4e1"};
    outline-offset: 0.045rem;
    border: ${({ hasError }) =>
      hasError ? "0.125rem solid #A60B2F" : "0 solid #23282f"};
    border-radius: 0.375rem;
  }
`;

export const InputField = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple; */
  padding: 0.5em;
`;

export const ForgotMyPassword = styled(Link)`
  text-decoration: none;
  color: #23282f;
  text-decoration-line: none;
  text-align: center;
  /* border: 2px solid darkkhaki; */
`;

export const ButtonField = styled.section`
  display: flex;
  gap: 0.75rem;
  padding: 0.25em;
`;
