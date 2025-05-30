import styled from "@emotion/styled";

import { FieldsetBasicStyled } from "../BasicInfoForm/BasicInfoFormStyled";
import { InputArea } from "@/components/LoginForm/LoginFormStyled";

import dateRange from "../../../../assets/dateRange.svg";
import downArrow from "../../../../assets/downArrow.svg";

export const FieldsetSpecificStyled = styled(FieldsetBasicStyled)`
  /* gap: 0.5rem;
  width: fit-content;
  height: fit-content;
  border: 2px solid rebeccapurple;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-auto-columns: minmax(150px, fit-content);
  grid-template-rows: auto auto;
  grid-template-areas:
    "data data tipoDeDespesa tipoDeDespesa centro centro centro moeda"
    "ordemInterna divisao pep distKm valorKm valorFaturado despesaTotal botoes";

    & > :nth-of-type(3) {
        justify-self: right;
    }

    & > :nth-last-of-type(4) {
        justify-self: right;
    } */

  gap: 1.875rem;
  /* border: 2px solid darkgoldenrod; */

  div {
    gap: 0.5rem;
  }

  div + div {
    align-items: last baseline;
  }

  section:last-of-type {
    padding-right: 0;
  }
`;

export const DataField = styled(InputArea)`
  width: 100%;
  height: 2.6875rem;
  color: #898d93;
  padding: 0.625rem;
  text-transform: uppercase;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  &::after {
    content: "";

    background-color: #001a3d;
    position: absolute;
    padding: 0.05rem;
    margin: 6.25rem;
    transform: translateY(-208%);
    top: -22%;
    right: -72%;
    width: 1.875rem;
    height: 2.6875rem;
    text-align: center;
    border-radius: 0 0.3688rem 0.375rem 0;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    content: " ";
    background-image: url(${dateRange.src});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    margin: 12.5rem;
    top: ${({ hasError }) => (hasError ? "-480%" : "-460%")};
    right: -141%;
    z-index: 2;
    pointer-events: none;
  }
`;

export const ExpenseSelect = styled(InputArea)`
  width: ${({ moeda }) => (moeda ? "7.1875rem" : "100%")};
  max-width: 100%;
  height: 2.6875rem;
  font-family: inherit;
  appearance: none;
`;

export const SelectContainer = styled.div`
  position: relative;

  &::after {
    content: "";

    background-color: #001a3d;
    position: absolute;
    width: 1.875rem;
    height: ${({ hasError }) => (hasError ? "40px" : "41.5px")};
    top: ${({ hasError }) => (hasError ? "2%" : "1%")};
    right: ${({ centro }) => (centro ? "0.2%" : "0.5%")};
    border-radius: 0 0.3125rem 0.3125rem 0;
    pointer-events: none;
  }

  &::before {
    content: "";
    background-image: url(${downArrow.src});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 18%;
    right: ${({ centro }) => (centro ? "1%" : "2%")};
    z-index: 2;
    pointer-events: none;
  }
`;
