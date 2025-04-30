import {
  FormStyled,
  InputArea,
  ForgotMyPassword,
  ButtonField,
  LoginErrorMessage,
} from "./LoginFormStyled";
import Button from "../Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function LoginForm() {
  const schemas = {
    email: z.string().email("Digite um email válido"),
    senha: z.string().min(6, "A senha tem que ter no mínimo 6 dígitos"),
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(z.object(schemas)),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <>
      <FormStyled autoComplete="off" id="login">
        <InputArea
          width="xLarge"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="off"
          {...register("email")}
          hasError={!!errors.email}
        />
        {errors.email && (
          <LoginErrorMessage betweenInputs>
            {errors.email.message}
          </LoginErrorMessage>
        )}
        <InputArea
          width="xLarge"
          type="password"
          placeholder="Senha"
          name="senha"
          id="senha"
          autoComplete="current-password"
          {...register("senha")}
          hasError={!!errors.senha}
        />
        {errors.senha && (
          <LoginErrorMessage>{errors.senha.message}</LoginErrorMessage>
        )}
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
