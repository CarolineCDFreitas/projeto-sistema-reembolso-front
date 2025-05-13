"use client";

import Button from "@/components/Button/Button";
import { ButtonField } from "@/components/LoginForm/LoginFormStyled";
import { MdCheck } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import {
  OutputArea,
  OutputWrapper,
  OutputField,
  SubmitPanelSection,
} from "./SubmitPanelStyled";

function SubmitPanel() {
  return (
    <SubmitPanelSection aria-label="Enviar ou cancelar solicitação de reembolso">
      <OutputWrapper>
        <OutputField>
          <label htmlFor="totalFaturado">Total Faturado</label>
          <OutputArea id="totalFaturado" name="totalFaturado">
            <span>00.00</span>
          </OutputArea>
        </OutputField>
        <OutputField>
          <label htmlFor="totalDespesa">Total Despesa</label>
          <OutputArea id="totalDespesa" name="totalDespesa">
            <span>00.00</span>
          </OutputArea>
        </OutputField>
      </OutputWrapper>
      <ButtonField>
        <Button buttonAction="enviar" hasIcon place="menu">
          <MdCheck />
          Enviar para análise
        </Button>
        <Button buttonAction="cancelar" hasIcon place="menu">
          <MdOutlineClose />
          Cancelar Solicitação
        </Button>
      </ButtonField>
    </SubmitPanelSection>
  );
}

export default SubmitPanel;
