import styled from "@emotion/styled";
import Link from "next/link";

const widthSize = {
  small: "4.5rem",
  medium: "7.5rem",
  large: "18rem",
  xLarge: "22.925rem",
};

const settingWidth = ({ width }) => {
  return widthSize[width] || widthSize.large;
};

export const InputArea = styled.input`
  margin-block-end: 0.7rem;
  height: 2.8125rem;
  width: ${settingWidth};
  padding: 0.75rem 0.8125rem;
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
      hasError ? "0 solid transparent" : "0.255rem solid #cbd4e1"};
    outline-offset: 0;
    border: ${({ hasError }) =>
      hasError ? "0.125rem solid #A60B2F" : "0.05rem solid #23282f"};
    border-radius: 0.375rem;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple; */
`;

export const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  /* border: 2px solid darkblue; */

  legend,
  label {
    width: 0px;
    height: 0px;
    color: transparent;
  }
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
  justify-content: center;

  /* border: 2px solid darkcyan; */
  gap: 0.75rem;
  padding: 0.25em;
`;

export const LoginErrorMessage = styled.span`
  margin-block-end: ${({ betweenInputs }) => (betweenInputs ? "0.7rem" : "0")};
  /* border: 2px solid hotpink;*/
`;
