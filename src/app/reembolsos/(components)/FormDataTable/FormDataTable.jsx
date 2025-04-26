"use client";
import { MdMoreVert, MdDescription } from "react-icons/md";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import {
  TableStyled,
  Teste,
  NameCellContent,
  CompanyCellContent,
  MoreOptionsCell,
  CheckboxInputArea,
  IconContainer,
  BasicCellContent,
  MenuList,
  DropdownMenuContainer,
} from "./FormDataTableStyled";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";

function FormDataTable() {
  const fetchDataFromServer = () =>
    JSON.parse(localStorage.getItem("DadosTemporarios") || "[]");

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

  const [activeMenus, setActiveMenus] = useState(null);

  const toggleMenus = (menuId, e) => {
    e.stopPropagation();
    if (activeMenus === null || activeMenus !== menuId) {
      setActiveMenus(menuId);
    }

    if (activeMenus === menuId) {
      setActiveMenus(null);
    }
  };

  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutsideOfField = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setActiveMenus(null);
      }
    };

    document.addEventListener("click", handleClickOutsideOfField);

    return () => {
      document.removeEventListener("click", handleClickOutsideOfField);
    };
  }, [activeMenus]);

  const settingARIA = () => {
    if (activeMenus === null) {
      return "false";
    } else {
      return "true";
    }
  };

  const deleteForm = (id) => {
    const existingData = JSON.parse(
      localStorage.getItem("DadosTemporarios") || "[]"
    );

    const updatedData = existingData.filter((item) => item.id !== id);

    localStorage.setItem("DadosTemporarios", JSON.stringify(updatedData));

    console.log("fui excluído");

    setActiveMenus(null);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteForm,
    onSuccess: () => {
      queryClient.invalidateQueries(["dataTable"]);
    },
  });

  const deleting = (id) => {
    mutation.mutate(id);
  };

  return (
    <Teste>
      <TableStyled>
        <caption>Dados dos formulários enviados</caption>
        <thead>
          <tr>
            <th colSpan={2}>&nbsp;</th>
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
          {formatedData.map((item) => {
            return (
              <tr key={item.id}>
                <th>
                  <CheckboxInputArea
                    type="checkbox"
                    name="selected"
                    id={item.id}
                    title="Selecionar para enviar para análise"
                  />
                </th>
                <MoreOptionsCell scope="row" id={`form${item.id}`}>
                  <button
                    aria-label="Mais opções"
                    aria-expanded={settingARIA()}
                    aria-haspopup="true"
                    aria-controls={`dropdownMenu${item.id}`}
                    title="Mais opções"
                    onClick={(e) => toggleMenus(item.id, e)}
                    ref={buttonRef}
                  >
                    <MdMoreVert />
                  </button>
                  {activeMenus === item.id && (
                    <DropdownMenuContainer role="menu" ref={menuRef}>
                      <MenuList id={`dropdownMenu${item.id}`}>
                        <li role="menuitem">
                          <a href="#" title="Editar">
                            <RiEditLine />
                            <span>Editar</span>
                          </a>
                        </li>
                        <li role="menuitem">
                          <button
                            onClick={() => deleting(item.id)}
                            title="Excluir"
                          >
                            <RiDeleteBin6Line />
                            <span>Excluir</span>
                          </button>
                        </li>
                      </MenuList>
                    </DropdownMenuContainer>
                  )}
                </MoreOptionsCell>
                <td>
                  <NameCellContent title={item.nomeCompleto}>
                    {item.nomeCompleto}
                  </NameCellContent>
                </td>
                <td>
                  <CompanyCellContent>{item.empresa}</CompanyCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.prestacaoDeContas}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.formatedDate}</BasicCellContent>
                </td>
                <td>
                  <IconContainer>
                    <MdDescription />
                  </IconContainer>
                </td>
                <td>
                  <BasicCellContent title={item.expenseType}>
                    {item.expenseType}
                  </BasicCellContent>
                </td>
                <td>
                  <BasicCellContent title={item.codeDescription}>
                    {item.codeDescription}
                  </BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.ordemInterna}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.divisao}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.pep}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.moeda}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.distKm}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.valorKm}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.valorFaturado}</BasicCellContent>
                </td>
                <td>
                  <BasicCellContent>{item.despesaTotal}</BasicCellContent>
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
