"use client";
import { TableStyled, Teste } from "./FormDataTableStyled";
import { useQuery } from "@tanstack/react-query";

function FormDataTable() {
  const fetchDataFromServer = () =>
    JSON.parse(localStorage.getItem("DadosTemporarios")) || [];

  const { data } = useQuery({
    queryKey: ["dataTable"],
    queryFn: fetchDataFromServer,
  });

  const formatedData =
    data?.map((item) => {
      const [year, month, day] = item.data.split("-");
      const formatedDate = `${day}/${month}/${year}`;

      const costCenterCode = {
        1100109002: "FIN CONTROLES INTERNOS MTZ",
        1100110002: "FIN VICE-PRESIDENCIA FINANÇAS MTZ",
        1100110102: "FIN CONTABILIDADE MTZ",
      };

      const expenseTypeFormated = {
        alimentacao: "Alimentação",
        combustivel: "Combustível",
        conducao: "Condução",
        estacionamento: "Estacionamento",
        viagemAdministrativa: "Viagem administrativa",
        viagemOperacional: "Viagem operacional",
        eventosDeRepresentacao: "Eventos de representação",
      };

      return {
        ...item,
        formatedDate,
        codeDescription: costCenterCode[item.centro] || "",
        expenseType: expenseTypeFormated[item.tipoDeDespesa] || "",
      };
    }) || [];

  return (
    <Teste>
      <TableStyled>
        <caption>Dados dos formulários enviados</caption>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th scope="col">Colaborador(a)</th>
            <th scope="col">Empresa</th>
            <th scope="col">Nº Prest.</th>
            <th scope="col">Data</th>
            <th scope="col">Motivo</th>
            <th scope="col">Tipo de despesa</th>
            <th scope="col">Ctr. Custo</th>
            <th scope="col">Ord. Int.</th>
            <th scope="col">Div.</th>
            <th scope="col">PEP</th>
            <th scope="col">Moeda</th>
            <th scope="col">Dist.Km</th>
            <th scope="col">Val.Km</th>
            <th scope="col">Val.Faturado</th>
            <th scope="col">Despesa</th>
          </tr>
        </thead>
        <tbody>
          {formatedData.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row" id={`form${index}`}>
                  🗑️
                </th>
                <td>
                  <span title={item.nomeCompleto}>{item.nomeCompleto}</span>
                </td>
                <td>
                  <span>{item.empresa}</span>
                </td>
                <td>
                  <span>{item.prestacaoDeContas}</span>
                </td>
                <td>
                  <span>{item.formatedDate}</span>
                </td>
                <td>
                  <span>📋</span>
                </td>
                <td>
                  <span title={item.expenseType}>{item.expenseType}</span>
                </td>
                <td>
                  <span title={item.codeDescription}>
                    {item.codeDescription}
                  </span>
                </td>
                <td>
                  <span>{item.ordemInterna}</span>
                </td>
                <td>
                  <span>{item.divisao}</span>
                </td>
                <td>
                  <span>{item.pep}</span>
                </td>
                <td>
                  <span>{item.moeda}</span>
                </td>
                <td>
                  <span>{item.distKm}</span>
                </td>
                <td>
                  <span>{item.valorKm}</span>
                </td>
                <td>
                  <span>{item.valorFaturado}</span>
                </td>
                <td>
                  <span>{item.despesaTotal}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
    </Teste>
  );
}

export default FormDataTable;
