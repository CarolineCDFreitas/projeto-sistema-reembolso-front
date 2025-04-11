"use client";

import { FormStyled } from "../components/Form/FormStyled";
import BasicInfoForm from "../components/BasicInfoForm/BasicInfoForm";
import SpecificInfoForm from "../components/SpecificInfoForm/SpecificInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

export default function Solicitacao() {
  const schemas = {
    valorKm: z
      .string()
      .refine((val) => /^\d{0,8}\.\d{2}$/.test(val), {
        message: "Insira apenas números no formato xxx.xx",
      })
      .transform((val) => parseFloat(val)),
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

  const focusHandlers = { focusedField, handleOnBlur, handleOnFocus}

  return (
    <>
      <FormStyled
        onSubmit={handleSubmit((data) => {
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
