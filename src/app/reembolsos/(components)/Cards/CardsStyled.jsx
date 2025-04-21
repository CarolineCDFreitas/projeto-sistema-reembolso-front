import Link from "next/link";
import styled from "@emotion/styled";

const settingPadding = ({ adjustingPadding }) =>
  adjustingPadding ? "2rem 5.5rem" : "2rem";

export const CardsStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "adjustingPadding",
})`
  background-color: white;
  color: #23282f;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 4px 0px #0a0f1e29;
  border: 0.05rem solid #cbd4e1;
  padding: ${settingPadding};
  text-decoration: none;

  &:hover,
  &:active {
    background-color: #f1f4f9;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 48px;
    height: 48px;
  }
`;
