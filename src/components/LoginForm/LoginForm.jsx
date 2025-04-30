import {
  FormStyled,
  FieldsetStyled,
  InputArea,
  ForgotMyPassword,
  ButtonField,
  LoginErrorMessage,
} from "./LoginFormStyled";
import Button from "../Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import api from "@/services/api/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const schemas = {
    email: z.string().email("Digite um email válido"),
    senha: z.string().min(6, "A senha tem que ter no mínimo 6 dígitos"),
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, dirtyFields },
    watch,
    clearErrors,
  } = useForm({
    resolver: zodResolver(z.object(schemas)),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [errorMessage, setErrorMessage] = useState();

  const router = useRouter();

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

    if (dirtyFields[name] && !fieldValue && fieldErrors) {
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

  const sendForm = (data) => {
    return api.post("/colaborador/login", data);
  };

  const mutation = useMutation({
    mutationFn: sendForm,
    onSuccess: () => router.push("/reembolsos"),
    onError: (error) => {
      setErrorMessage(error.response.data.mensagem);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const [email, senha] = watch(["email", "senha"]);

  useEffect(() => {
    if (errorMessage && (email || senha)) {
      setErrorMessage();
    }
  }, [email, senha]);

  return (
    <>
      <FormStyled
        autoComplete="off"
        id="login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldsetStyled>
          <legend>Informações de login</legend>
          <label htmlFor="email">Email</label>
          <InputArea
            width="xLarge"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            autoComplete="off"
            {...register("email")}
            hasError={!!errors.email || !!errorMessage}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {errors.email && (
            <LoginErrorMessage betweenInputs>
              {errors.email.message}
            </LoginErrorMessage>
          )}
          <label htmlFor="senha">Senha</label>
          <InputArea
            width="xLarge"
            type="password"
            placeholder="Senha"
            name="senha"
            id="senha"
            autoComplete="current-password"
            {...register("senha")}
            hasError={!!errors.senha || !!errorMessage}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {errors.senha && (
            <LoginErrorMessage>{errors.senha.message}</LoginErrorMessage>
          )}
          {errorMessage && (
            <LoginErrorMessage>{errorMessage}</LoginErrorMessage>
          )}
        </FieldsetStyled>
      </FormStyled>

      <ForgotMyPassword href="/"> Esqueci minha senha</ForgotMyPassword>

      <ButtonField>
        <Button label="Entrar" buttonAction="entrar" form="login" />
        <Button label="Criar conta" buttonAction="criar" />
      </ButtonField>
    </>
  );
}

export default LoginForm;
