import styled from "@emotion/styled";

import { FieldsetBasicStyled } from "../BasicInfoForm/BasicInfoFormStyled";
import { InputArea } from "@/components/Input/InputStyle";

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

  gap: 1.7rem;
  /* border: 2px solid darkgoldenrod; */
  div {
    gap: 0.5rem;
  }

  div + div {
    align-items: last baseline;
  }
`;

export const DataField = styled(InputArea)`
  width: fit-content;
  height: fit-content;
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
    top: -49%;
    right: -75%;
    width: 30px;
    height: 38px;
    text-align: center;
    border-radius: 0 5.9px 6px 0;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    content: " ";
    background-image: url(${dateRange.src});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 24px;
    height: 24px;
    margin: 12.5rem;
    top: -508%;
    right: -143%;
    z-index: 2;
    pointer-events: none;
  }
`;

export const ExpenseSelect = styled(InputArea)`
  width: ${({ moeda }) => (moeda ? "7.1875rem" : "max-content")};
  height: fit-content;
  font-family: inherit;
  appearance: none;

`;

export const SelectContainer = styled.div`
  position: relative;

  &::after {
    content: "";

    background-color: #001a3d;
    position: absolute;
    width: 30px;
    height: 40px;
    top: ${({hasError}) => hasError ? "2%" : "1%"};
    right: 0.3%;
    border-radius: 0 5px 5px 0;
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
    right: 1.5%;
    z-index: 2;
    pointer-events: none;
  }
`;
