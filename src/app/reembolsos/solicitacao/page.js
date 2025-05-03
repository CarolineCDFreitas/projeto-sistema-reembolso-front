"use client";
import { FormStyled, ErrorMessage } from "../(components)/Form/FormStyled";
import BasicInfoForm from "../(components)/BasicInfoForm/BasicInfoForm";
import SpecificInfoForm from "../(components)/SpecificInfoForm/SpecificInfoForm";
import FormDataTable from "../(components)/FormDataTable/FormDataTable";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Solicitacao() {
  const selectSchema = {
    tipoDeDespesa: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção"),
    centro: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção"),
    moeda: z
      .string()
      .refine((val) => val !== "selecionar", "Selecione uma opção"),
  };

  const monetarySchema = {
    valorKm: z
      .string()
      .trim()
      .refine(
        (val) => !val || /^\d{0,8}\.\d{2}/.test(val),
        "Use o formato 00.00"
      )
      .transform((val) => parseFloat(val)),
    valorFaturado: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{0,8}\.\d{2}$/, "Use o formato 00.00")
      .transform((val) => parseFloat(val)),
    despesaTotal: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{0,8}\.\d{2}$/, "Use o formato 00.00")
      .transform((val) => parseFloat(val)),
  };

  const identifiersSchema = {
    nomeCompleto: z
      .string()
      .trim()
      .min(8, "Digite seu nome completo (nome e sobrenome)")
      .regex(/^[A-Za-z\s]+$/, "Não deve conter número"),
    prestacaoDeContas: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^\d{6}$/, "Insira 6 dígitos (000000)"),
    empresa: z
      .string()
      .trim()
      .min(1, "Campo obrigatório")
      .regex(/^[A-Za-z]{3}\d{3}$/, "Use no formato AAA000"),
    ordemInterna: z
      .string()
      .trim()
      .refine((val) => !val || /^\d{4}$/.test(val), "Insira 4 dígitos (0000)"),
    divisao: z
      .string()
      .trim()
      .refine((val) => !val || /^\d{3}$/.test(val), "Insira 3 dígitos (000)"),
    pep: z
      .string()
      .trim()
      .refine((val) => !val || /^\d{3}$/.test(val), "Insira 3 dígitos (000)"),
  };

  const schemas = z
    .object({
      ...selectSchema,
      ...identifiersSchema,
      ...monetarySchema,
      data: z
        .string()
        .refine(
          (val) => new Date(val) <= new Date(),
          "A data não pode ser no futuro"
        ),
      distKm: z
        .string()
        .trim()
        .refine(
          (val) => !val || /^\d{1,5}$/.test(val),
          "Somente números (máx. 5 dígitos)"
        )
        .transform((val) => parseFloat(val)),
      descricaoMotivo: z
        .string()
        .trim()
        .min(1, "Campo obrigatório")
        .max(255, "O máximo de caracteres é 255"),
    })
    .superRefine((data, ctx) => {
      if (data.tipoDeDespesa === "combustivel") {
        if (!data.distKm) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Campo obrigatório",
            path: ["distKm"],
          });
        }
        if (!data.valorKm) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Campo obrigatório",
            path: ["valorKm"],
          });
        }
      }
      if (data.ordemInterna && !data.divisao) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Campo obrigatório",
          path: ["divisao"],
        });
      }
      if (data.divisao && !data.ordemInterna) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Campo obrigatório",
          path: ["ordemInterna"],
        });
      }
      if (!data.ordemInterna && !data.divisao && !data.pep) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Preencha este campo ou informe Ordem Interna e Divisão",
          path: ["pep"],
        });
      }
    });

  const methods = useForm({
    resolver: zodResolver(schemas),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitted },
    reset,
    getValues,
    watch,
    clearErrors,
  } = methods;

  const [focusedField, setFocusedField] = useState({});

  const updateFocusState = (name, isFocused) => {
    setFocusedField((prev) => ({ ...prev, [name]: isFocused }));
  };

  const clearErrorIfNeed = (name) => {
    const realTimeValues = watch();
    const fieldValue = realTimeValues[name];
    const fieldErrors = errors[name];

    if (!isSubmitted && dirtyFields[name] && !fieldValue && fieldErrors) {
      clearErrors(name);
    }
  };

  const handleOnFocus = (e) => {
    const name = e.target.name;
    updateFocusState(name, true);
  };

  const handleOnBlur = (e) => {
    const name = e.target.name;

    updateFocusState(name, false);
    clearErrorIfNeed(name);
  };

  const renderErrorMessage = (field) => {
    if (errors[field] && focusedField[field]) {
      if (field === "moeda" || field === "prestacaoDeContas") {
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

  const temporaryStorage = (newData) => {
    const existingData = JSON.parse(
      localStorage.getItem("DadosTemporarios") || "[]"
    );

    existingData.push(newData);

    localStorage.setItem("DadosTemporarios", JSON.stringify(existingData));
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: temporaryStorage,
    onSuccess: () => {
      queryClient.invalidateQueries(["dataTable"]);
      reset();
    },
  });

  const onSubmit = () => {
    const newData = { id: Date.now(), ...getValues() };
    mutation.mutate(newData);
  };

  return (
    <>
      <FormProvider {...methods}>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <BasicInfoForm {...focusHandlers} />
          <SpecificInfoForm {...focusHandlers} />
        </FormStyled>
        <FormDataTable />
      </FormProvider>
    </>
  );
}
