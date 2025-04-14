"use client";

import { FormStyled } from "../components/Form/FormStyled";
import BasicInfoForm from "../components/BasicInfoForm/BasicInfoForm";
import SpecificInfoForm from "../components/SpecificInfoForm/SpecificInfoForm";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

export default function Solicitacao() {
  const selectSchema = {
    tipoDeDespesa: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção."),
    centro: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção."),
    moeda: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção."),
  };

  const monetarySchema = {
    valorKm: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{0,8}\.\d{2}$/, "Use o formato 000.00")
      .transform((val) => parseFloat(val)),
    valorFaturado: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{0,8}\.\d{2}$/, "Use o formato 000.00")
      .transform((val) => parseFloat(val)),
    despesaTotal: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{0,8}\.\d{2}$/, "Use o formato 000.00")
      .transform((val) => parseFloat(val)),
  };

  const identifiersSchema = {
    nomeCompleto: z
      .string()
      .trim()
      .min(10, "Digite seu nome completo (nome e sobrenome).")
      .regex(/^[A-Za-z\s]+$/, "Não deve conter número."),
    prestacaoDeContas: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{6}$/, "Insira 6 dígitos (000000)."),
    empresa: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^[A-Za-z]{3}\d{3}$/, "Use no formato AAA000"),
    ordemInterna: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{4}$/, "Insira 4 dígitos (0000)."),
    divisao: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{3}$/, "Insira 3 dígitos (000)."),
    pep: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{3}$/, "Insira 3 dígitos (000)."),
  };

  const schemas = {
    ...selectSchema,
    ...identifiersSchema,
    ...monetarySchema,
    data: z.string().refine((val) => {
      const [ano, mes, dia] = val.split("-");
      const data = new Date(`${mes}-${dia}-${ano}`);
      const hoje = new Date();

      return data <= hoje;
    }, "A data não pode estar no futuro."),

    distKm: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{1,5}$/, "Somente números (máx. 5 dígitos)")
      .transform((val) => parseFloat(val)),
    descricaoMotivo: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .max(255, "Não posso ultrapasar 255 caracteres"),
  };

  const methods = useForm({
    resolver: zodResolver(z.object(schemas)),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    clearErrors,
  } = methods;

  const formValues = watch();

  Object.keys(formValues).forEach((key) => {
    if (!formValues[key] && errors[key]) {
      clearErrors(key);
    }
  });

  const [focusedField, setFocusedField] = useState({});

  // const handleOnFocus = (name) => {
  //   setFocusedField((prev) => ({ ...prev, [name]: true }));
  // };
  // const handleOnBlur = (name) => {
  //   setFocusedField((prev) => ({ ...prev, [name]: false }));
  // };

  const handleOnFocus = (e) => {
    const name = e.target.name;
    setFocusedField((prev) => ({ ...prev, [name]: true }));
  };

  const handleOnBlur = (e) => {
    const name = e.target.name;
    setFocusedField((prev) => ({ ...prev, [name]: false }));
  };

  const renderErrorMessage = (field) => {
    if (errors[field] && focusedField[field]) {
      if (field === "moeda") {
        return (
          <ErrorMessage
            id={`erro-${field}`}
            compactSpace
            hasError={errors[field]}
          >
            {errors[field].message}
          </ErrorMessage>
        );
      }

      return (
        <ErrorMessage id={`erro-${field}`} hasError={errors[field]}>
          {errors[field].message}
        </ErrorMessage>
      );
    }
  };

  const focusHandlers = {
    focusedField,
    handleOnBlur,
    handleOnFocus,
    renderErrorMessage,
  };

  return (
    <>
      <FormStyled
        onSubmit={handleSubmit(() => {
          console.log("errors", errors);
        })}
      >
        <FormProvider {...methods}>
          <BasicInfoForm {...focusHandlers} />
          <SpecificInfoForm {...focusHandlers} />
        </FormProvider>
      </FormStyled>
    </>
  );
}
