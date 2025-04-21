"use client";
import {
  FieldsetBasicStyled,
  TextArea,
  InputSection,
  CharacterCounter,
} from "./BasicInfoFormStyled";
import { InputArea } from "@/components/Input/InputStyle";
import { useFormContext } from "react-hook-form";

function BasicInfoForm({
  focusedField,
  handleOnBlur,
  handleOnFocus,
  renderErrorMessage,
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const formValues = watch();

  const { descricaoMotivo } = formValues;

  const counter =
    descricaoMotivo !== undefined ? `${descricaoMotivo.length}/255` : " ";

  const isAtLimit = () => {
    if (descricaoMotivo !== undefined) {
      return Number(descricaoMotivo.length) >= 255;
    }
    return false;
  };

  return (
    <FieldsetBasicStyled showSeparator>
      <legend>Informações básicas</legend>

      <div>
        <InputSection>
          <label htmlFor="nomeCompleto">Nome Completo</label>
          <InputArea
            width="large"
            type="text"
            name="nomeCompleto"
            id="nomeCompleto"
            placeholder="Digite seu nome completo"
            {...register("nomeCompleto")}
            hasError={errors.nomeCompleto}
            autoComplete="off"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            aria-describedby="erro-nomeCompleto"
            autoCapitalize="words"
          />
          {renderErrorMessage("nomeCompleto")}
        </InputSection>
        <InputSection>
          <label htmlFor="empresa">Empresa</label>
          <InputArea
            width="medium"
            type="text"
            name="empresa"
            id="empresa"
            placeholder="AAA000"
            {...register("empresa")}
            hasError={errors.empresa}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
            aria-describedby="erro-empresa"
          />
          {renderErrorMessage("empresa")}
        </InputSection>
        <InputSection>
          <label htmlFor="prestacaoDeContas">Nº Prest. Contas</label>
          <InputArea
            width="medium"
            type="text"
            name="prestacaoDeContas"
            id="prestacaoDeContas"
            placeholder="000000"
            {...register("prestacaoDeContas")}
            hasError={errors.prestacaoDeContas}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
            aria-describedby="erro-prestacaoDeContas"
          />
          {renderErrorMessage("prestacaoDeContas")}
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
          placeholder="Escreva aqui o motivo do reembolso"
          {...register("descricaoMotivo")}
          hasError={errors.descricaoMotivo}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          autoComplete="off"
          aria-describedby="erro-descricaoMotivo"
        ></TextArea>
        {renderErrorMessage("descricaoMotivo")}
        <CharacterCounter
          isFocused={focusedField.descricaoMotivo}
          hasError={isAtLimit()}
        >
          {counter}
        </CharacterCounter>
      </InputSection>
    </FieldsetBasicStyled>
  );
}

export default BasicInfoForm;
