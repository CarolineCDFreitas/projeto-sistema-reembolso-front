import Button from "@/components/Button/Button";
import { MdAdd } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { InputSection } from "../BasicInfoForm/BasicInfoFormStyled";
import {
  FieldsetSpecificStyled,
  DataField,
  ExpenseSelect,
  SelectContainer,
} from "../SpecificInfoForm/SpecificInfoFormStyled";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ButtonField, InputArea } from "@/components/Input/InputStyle";
import { useFormContext } from "react-hook-form";

function SpecificInfoForm({ focusedField, handleOnFocus, handleOnBlur }) {
  const {
    register,
    formState: { errors },
    reset,
  } = useFormContext();

  const renderErrorMessage = (field) => {
    if (errors[field] && focusedField[field]) {
      if (field === "moeda") {
        return (
          <ErrorMessage id={`erro-${field}`} compactSpace>
            {errors[field].message}
          </ErrorMessage>
        );
      }

      return (
        <ErrorMessage id={`erro-${field}`}>
          {errors[field].message}
        </ErrorMessage>
      );
    }
  };

  const handleFocus = (e) => handleOnFocus(e.target.name);
  const handleBlur = (e) => handleOnBlur(e.target.name);

  return (
    <FieldsetSpecificStyled>
      <legend>Informações específicas da solicitação de Reembolso</legend>

      <div>
        <InputSection>
          <label htmlFor="data">Data</label>
          <DataField
            type="date"
            name="data"
            id="data"
            {...register("data")}
            hasError={errors.data}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-data"
          />
          {renderErrorMessage("data")}
        </InputSection>
        <InputSection>
          <label htmlFor="tipoDeDespesa">Tipo de Despesa</label>
          <SelectContainer hasError={errors.tipoDeDespesa}>
            <ExpenseSelect
              as={"select"}
              name="tipoDeDespesa"
              id="tipoDeDespesa"
              defaultValue="selecionar"
              {...register("tipoDeDespesa")}
              hasError={errors.tipoDeDespesa}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              aria-describedby="erro-tipoDeDespesa"
            >
              <option value="selecionar" disabled>
                Selecionar
              </option>
              <option value="alimentação">Alimentação</option>
              <option value="combustível">Combustível</option>
              <option value="condução">Condução</option>
              <option value="estacionameto">Estacionamento</option>
              <option value="viagem administrativa">
                Viagem administrativa
              </option>
              <option value="viagem operacional">Viagem operacional</option>
              <option value="eventos de representação">
                Eventos de representação
              </option>
            </ExpenseSelect>
            {renderErrorMessage("tipoDeDespesa")}
          </SelectContainer>
        </InputSection>
        <InputSection>
          <label htmlFor="centro">Centro de custo</label>
          <SelectContainer hasError={errors.centro}>
            <ExpenseSelect
              as={"select"}
              name="centro"
              id="centro"
              defaultValue="selecionar"
              centro
              {...register("centro")}
              hasError={errors.centro}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              aria-describedby="erro-centro"
            >
              <option value="selecionar" disabled>
                Selecionar
              </option>
              <option value="controles internos">
                1100109002 - FIN CONTROLES INTERNOS MTZ
              </option>
              <option value="vice-presidência finanças">
                1100110002 - FIN VICE-PRESIDENCIA FINANÇAS MTZ
              </option>
              <option value="contabilidade">
                1100110102 - FIN CONTABILIDADE MTZ
              </option>
            </ExpenseSelect>
            {renderErrorMessage("centro")}
          </SelectContainer>
        </InputSection>
        <InputSection>
          <label htmlFor="moeda">Moeda</label>
          <SelectContainer hasError={errors.moeda}>
            <ExpenseSelect
              as={"select"}
              name="moeda"
              id="moeda"
              defaultValue="selecionar"
              moeda
              {...register("moeda")}
              hasError={errors.moeda}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              aria-describedby="erro-moeda"
            >
              <option value="selecionar" disabled>
                Selecionar
              </option>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
            </ExpenseSelect>
            {renderErrorMessage("moeda")}
          </SelectContainer>
        </InputSection>
      </div>

      <div>
        <InputSection>
          <label htmlFor="ordemInterna">Ord.Int.</label>
          <InputArea
            width="small"
            type="text"
            name="ordemInterna"
            id="ordemInterna"
            placeholder="0000"
            {...register("ordemInterna")}
            hasError={errors.ordemInterna}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-ordemInterna"
          />
          {renderErrorMessage("ordemInterna")}
        </InputSection>
        <InputSection>
          <label htmlFor="divisao">Div.</label>
          <InputArea
            width="small"
            type="text"
            name="divisao"
            id="divisao"
            placeholder="000"
            {...register("divisao")}
            hasError={errors.divisao}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-divisao"
          />
          {renderErrorMessage("divisao")}
        </InputSection>
        <InputSection>
          <label htmlFor="pep">PEP</label>
          <InputArea
            width="small"
            type="text"
            name="pep"
            id="pep"
            placeholder="000"
            {...register("pep")}
            hasError={errors.pep}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-pep"
          />
          {renderErrorMessage("pep")}
        </InputSection>
        <InputSection>
          <label htmlFor="distKm">Dist / Km</label>
          <InputArea
            width="small"
            type="text"
            name="distKm"
            id="distKm"
            placeholder="0000"
            {...register("distKm")}
            hasError={errors.distKm}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-distKm"
          />
          {renderErrorMessage("distKm")}
        </InputSection>
        <InputSection>
          <label htmlFor="valorKm">Valor / Km</label>
          <InputArea
            width="small"
            type="text"
            name="valorKm"
            id="valorKm"
            placeholder="000.00"
            {...register("valorKm")}
            hasError={errors.valorKm}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-valorKm"
          />
          {renderErrorMessage("valorKm")}
        </InputSection>
        <InputSection>
          <label htmlFor="valorFaturado">Valor faturado</label>
          <InputArea
            width="medium"
            type="text"
            name="valorFaturado"
            id="valorFaturado"
            placeholder="000.00"
            {...register("valorFaturado")}
            hasError={errors.valorFaturado}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-valorFaturado"
          />
          {renderErrorMessage("valorFaturado")}
        </InputSection>
        <InputSection>
          <label htmlFor="despesaTotal">Despesa</label>
          <InputArea
            width="medium"
            type="text"
            name="despesaTotal"
            id="despesaTotal"
            placeholder="000.00"
            {...register("despesaTotal")}
            hasError={errors.despesaTotal}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby="erro-despesaTotal"
          />
          {renderErrorMessage("despesaTotal")}
        </InputSection>
        <ButtonField>
          <Button buttonAction="salvar" hasIcon>
            <MdAdd /> <span>Salvar</span>
          </Button>
          <Button buttonAction="limpar" type="button" onClick={() => reset()}>
            <RiDeleteBack2Line />
          </Button>
        </ButtonField>
      </div>
    </FieldsetSpecificStyled>
  );
}
export default SpecificInfoForm;
