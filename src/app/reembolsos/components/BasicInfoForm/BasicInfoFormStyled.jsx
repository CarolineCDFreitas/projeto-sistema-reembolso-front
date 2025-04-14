import styled from "@emotion/styled";
import { InputArea } from "@/components/Input/InputStyle";
import { css } from "@emotion/react";

export const FieldsetBasicStyled = styled.fieldset`
  border: none;
  margin: 0.5rem;
  /* display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "nomeCompleto empresa prestacaoDeContas"
    "descricaoMotivo descricaoMotivo descricaoMotivo"; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.375rem;
  }

  legend {
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  div + section {
    label {
      margin-block-start: 0.1875rem;
    }
  }

  @media (min-width: 1024px) {
    ${({ showSeparator }) =>
      showSeparator &&
      css`
        position: relative;

        &::after {
          content: " ";
          width: 0.0625rem;
          height: 11.375rem;
          background-color: #cbd4e1;
          position: absolute;
          top: 3%;
          left: 101.5%;
        }
      `}
  }
`;

export const InputSection = styled.section`
  /* border: 2px solid rebeccapurple; */
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  height: fit-content;
  gap: 0.5rem;
  position: relative;
  min-height: 1.25rem;
  /* grid-area: ${({ gridArea }) => (gridArea ? gridArea : "unset")}; */

  label {
    font-weight: 700;
    white-space: nowrap;
  }
`;

export const TextArea = styled(InputArea)`
  width: auto;
  height: auto;
  color: #23282f;
  font-family: inherit;
  resize: none;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
