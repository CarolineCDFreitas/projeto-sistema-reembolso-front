import {
  FieldsetBasicStyled,
  TextArea,
  InputSection,
} from "../BasicInfoForm/BasicInfoFormStyled";
import { InputArea } from "@/components/Input/InputStyle";

function BasicInfoForm() {
  return (
    <FieldsetBasicStyled>
      <legend>Informações básicas</legend>

      <div>
        <InputSection>
          <label htmlFor="nomeCompleto">Nome Completo</label>
          <InputArea
            width="large"
            type="text"
            name="nomeCompleto"
            id="nomeCompleto"
          />
        </InputSection>
        <InputSection>
          <label htmlFor="empresa">Empresa</label>
          <InputArea width="medium" type="text" name="empresa" id="empresa" />
        </InputSection>
        <InputSection gridArea="prestacaoDeContas">
          <label htmlFor="prestacaoDeContas">Nº Prest. Contas</label>
          <InputArea
            width="medium"
            type="text"
            name="prestacaoDeContas"
            id="prestacaoDeContas"
          />
        </InputSection>
      </div>

      <InputSection>
        <label htmlFor="descricaoMotivo">Descrição / Motivo de Reembolso</label>
        <TextArea
          as="textarea"
          name="descricaoMotivo"
          id="descricaoMotivo"
          cols={70}
          rows={2}
        ></TextArea>
      </InputSection>
    </FieldsetBasicStyled>
  );
}

export default BasicInfoForm;
