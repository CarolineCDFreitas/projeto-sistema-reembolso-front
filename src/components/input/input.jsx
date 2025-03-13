import {
  InputField,
  InputArea,
  ForgotMyPassword,
  ButtonField,
} from "./inputStyle";
import Button from "../Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Input() {
  const schemas = {
    email: z.string().email("Digite um email válido"),
    senha: z.string().min(6, "A senha tem que ter no mínimo 6 dígitos"),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(z.object(schemas)),
    mode: "onChange",
  });

  const [emailValue, senhaValue] = watch(["email", "senha"], ["", ""]);

  const sending = (data) => {
    console.log(data);
  };

  return (
    <>
      <InputField
        onSubmit={handleSubmit(sending)}
        autoComplete="off"
        id="login"
      >
        <InputArea
          type="email"
          placeholder="Email"
          name="email"
          {...register("email")}
          hasError={!!errors.email && emailValue}
        />
        {errors.email && emailValue !== "" && (
          <span>{errors.email.message}</span>
        )}
        <InputArea
          type="password"
          placeholder="Senha"
          name="senha"
          autoComplete="current-password"
          {...register("senha")}
          hasError={!!errors.senha && senhaValue}
        />
        {errors.senha && senhaValue !== "" && (
          <span>{errors.senha.message}</span>
        )}
      </InputField>

      <ForgotMyPassword href="/"> Esqueci minha senha</ForgotMyPassword>

      <ButtonField>
        <Button
          label="Entrar"
          buttonAction="entrar"
          // type="submit"
          // form="login"
        />
        <Button label="Criar conta" buttonAction="criar" />
      </ButtonField>
    </>
  );
}

export default Input;
