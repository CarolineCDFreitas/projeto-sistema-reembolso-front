"use client";

import { FormStyled } from "../components/Form/FormStyled";
import BasicInfoForm from "../components/BasicInfoForm/BasicInfoForm";
import SpecificInfoForm from "../components/SpecificInfoForm/SpecificInfoForm";
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
    ordemInterna: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{4}$/, "Insira quatro dígitos (0000)."),
    divisao: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{3}$/, "Insira três dígitos (000)."),
    pep: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{3}$/, "Insira três dígitos (000)."),
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
      .regex(/^\d{1,5}$/, "Somente números (máx. 5 dígitos)"),
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

  const handleOnFocus = (name) => {
    setFocusedField((prev) => ({ ...prev, [name]: true }));
  };
  const handleOnBlur = (name) => {
    setFocusedField((prev) => ({ ...prev, [name]: false }));
  };
  const focusHandlers = { focusedField, handleOnBlur, handleOnFocus };

  return (
    <>
      <FormStyled
        onSubmit={handleSubmit(() => {
          console.log("errors", errors);
        })}
      >
        <FormProvider {...methods}>
          <BasicInfoForm />
          <SpecificInfoForm {...focusHandlers} />
        </FormProvider>
      </FormStyled>
    </>
  );
}
