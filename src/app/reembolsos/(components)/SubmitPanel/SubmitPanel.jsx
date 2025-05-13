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
import { useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api/api";

function SubmitPanel() {
  const { watch } = useFormContext();
  const selectedIds = watch("idsSelecionados") || [];

  const fetchValuesFromServer = () =>
    api
      .get("/reembolso/valores-solicitacoes-em-aberto")
      .then((response) => response.data);

  const { data } = useQuery({
    queryKey: ["resumo"],
    queryFn: fetchValuesFromServer,
  });

  const filteredData = data?.filter((item) => selectedIds?.includes(item.id));

  const invoicedAmounts = filteredData?.map((item) =>
    parseFloat(item.valorFaturado)
  );
  const totalExpense = filteredData?.map((item) =>
    parseFloat(item.despesaTotal)
  );

  const totalInvoiced = invoicedAmounts?.reduce((acc, curr) => acc + curr, 0);
  const totalExpenses = totalExpense?.reduce((acc, curr) => acc + curr, 0);

  return (
    <SubmitPanelSection aria-label="Enviar ou cancelar solicitação de reembolso">
      <OutputWrapper>
        <OutputField>
          <label htmlFor="totalFaturado">Total Faturado</label>
          <OutputArea id="totalFaturado" name="totalFaturado">
            <span>{totalInvoiced?.toFixed(2)}</span>
          </OutputArea>
        </OutputField>
        <OutputField>
          <label htmlFor="totalDespesa">Total Despesa</label>
          <OutputArea id="totalDespesa" name="totalDespesa">
            <span>{totalExpenses?.toFixed(2)}</span>
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
