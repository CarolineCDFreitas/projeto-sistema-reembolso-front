"use client";
import { MdMoreVert, MdDescription } from "react-icons/md";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import {
  TableStyled,
  TableContainer,
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
import { useFormContext } from "react-hook-form";
import api from "@/services/api/api";

function FormDataTable() {
  const fetchDataFromServer = () =>
    api
      .get("/reembolso/todas-solicitacoes-em-aberto")
      .then((response) => response.data);

  const { data } = useQuery({
    queryKey: ["reembolsos"],
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

  const menuRef = useRef({});
  const buttonRef = useRef({});
  const scrollContainerRef = useRef();

  useEffect(() => {
    const handleClickOutsideOfField = (event) => {
      if (menuRef.current && buttonRef.current) {
        const activeMenuRef = menuRef.current[activeMenus];
        const menuButtonRef = buttonRef.current[activeMenus];

        if (
          activeMenuRef &&
          !activeMenuRef.contains(event.target) &&
          !menuButtonRef.contains(event.target)
        ) {
          setActiveMenus(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutsideOfField);

    return () => {
      document.removeEventListener("click", handleClickOutsideOfField);
    };
  }, [activeMenus]);

  useEffect(() => {
    if (!activeMenus) return;

    const timeoutId = setTimeout(() => {
      const menu = menuRef.current[activeMenus];
      const container = scrollContainerRef.current;

      const menuDimensions = menu.getBoundingClientRect();
      const containerDimensions = container.getBoundingClientRect();

      if (menu && container) {
        if (
          menuDimensions.top > containerDimensions.top ||
          menuDimensions.bottom < containerDimensions.bottom
        ) {
          menu.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [activeMenus]);

  const settingARIA = () => {
    if (activeMenus === null) {
      return "false";
    } else {
      return "true";
    }
  };

  const { register } = useFormContext({
    mode: "onChange",
    defaultValues: {
      idsSelecionados: [],
    },
  });

  const deleteForm = (id) => {
    return api.delete("reembolso/excluir", { data: { id: id } });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteForm,
    onSuccess: (data) => {
      alert(data.data.mensagem);
      queryClient.invalidateQueries(["reembolsos"]);
      queryClient.invalidateQueries(["resumo"]);
      setActiveMenus(null);
    },
    onError: (error) =>
      alert(`Erro ao excluir a solicitação: ${error.message}`),
  });

  const deleting = (id) => {
    mutation.mutate(id);
  };

  return (
    <TableContainer ref={scrollContainerRef}>
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
                    id={`checkbox${item.id}`}
                    title="Selecionar para enviar para análise"
                    value={item.id}
                    {...register("idsSelecionados")}
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
                    ref={(element) => {
                      buttonRef.current[item.id] = element;
                    }}
                  >
                    <MdMoreVert />
                  </button>
                  {activeMenus === item.id && (
                    <DropdownMenuContainer
                      role="menu"
                      ref={(element) => {
                        menuRef.current[item.id] = element;
                      }}
                    >
                      <MenuList id={`dropdownMenu${item.id}`}>
                        <li role="none">
                          <a href="#" role="menuitem" title="Editar">
                            <RiEditLine />
                            <span>Editar</span>
                          </a>
                        </li>
                        <li role="none">
                          <button
                            onClick={() => deleting(item.id)}
                            title="Excluir"
                            role="menuitem"
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
                    <MdDescription title={item.descricaoMotivo} />
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
    </TableContainer>
  );
}

export default FormDataTable;
