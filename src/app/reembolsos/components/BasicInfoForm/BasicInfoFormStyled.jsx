import styled from "@emotion/styled";
import { InputArea } from "@/components/Input/InputStyle";

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
  }

  legend {
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px;
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
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : "unset")};

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
`;
