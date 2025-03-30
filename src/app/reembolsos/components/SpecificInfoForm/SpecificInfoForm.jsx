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
import { ButtonField, InputArea } from "@/components/Input/InputStyle";

function SpecificInfoForm() {
  return (
    <FieldsetSpecificStyled>
      <legend>Informações específicas da solicitação de Reembolso</legend>

      <div>
        <InputSection>
          <label htmlFor="data">Data</label>
          <DataField type="date" name="data" id="data" required />
        </InputSection>
        <InputSection>
          <label htmlFor="tipoDeDespesa">Tipo de Despesa</label>
          <SelectContainer>
            <ExpenseSelect
              as={"select"}
              name="tipoDeDespesa"
              id="tipoDeDespesa"
              defaultValue="selecionar"
              required
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
          </SelectContainer>
        </InputSection>
        <InputSection>
          <label htmlFor="centro">Centro de custo</label>
          <SelectContainer>
            <ExpenseSelect
              as={"select"}
              name="centro"
              id="centro"
              defaultValue="selecionar"
              centro
              required
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
          </SelectContainer>
        </InputSection>
        <InputSection>
          <label htmlFor="moeda">Moeda</label>
          <SelectContainer>
            <ExpenseSelect
              as={"select"}
              name="moeda"
              id="moeda"
              defaultValue="selecionar"
              moeda
              required
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
            required
          />
        </InputSection>
        <InputSection>
          <label htmlFor="divisao">Div.</label>
          <InputArea
            width="small"
            type="text"
            name="divisao"
            id="divisao"
            required
          />
        </InputSection>
        <InputSection>
          <label htmlFor="pep">PEP</label>
          <InputArea width="small" type="text" name="pep" id="pep" required />
        </InputSection>
        <InputSection>
          <label htmlFor="distKm">Dist / Km</label>
          <InputArea
            width="small"
            type="text"
            name="distKm"
            id="distKm"
            required
          />
        </InputSection>
        <InputSection>
          <label htmlFor="valorKm">Valor / Km</label>
          <InputArea
            width="small"
            type="text"
            name="valorKm"
            id="valorKm"
            required
          />
        </InputSection>
        <InputSection>
          <label htmlFor="valorFaturado">Valor faturado</label>
          <InputArea
            width="medium"
            type="text"
            name="valorFaturado"
            id="valorFaturado"
            required
          />
        </InputSection>
        <InputSection>
          <label htmlFor="despesaTotal">Despesa</label>
          <InputArea
            width="medium"
            type="text"
            name="despesaTotal"
            id="despesaTotal"
            required
          />
        </InputSection>
        <ButtonField>
          <Button buttonAction="salvar" hasIcon>
            <MdAdd /> <span>Salvar</span>
          </Button>
          <Button buttonAction="limpar" type="reset">
            <RiDeleteBack2Line />
          </Button>
        </ButtonField>
      </div>
    </FieldsetSpecificStyled>
  );
}

export default SpecificInfoForm;
