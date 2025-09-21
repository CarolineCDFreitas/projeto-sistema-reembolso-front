"use client";
import Button from "../Button/Button";
import {
  FieldsetContainer,
  FieldsetContent,
  Container,
  Heading,
  FormField,
  Fieldset,
  Logo,
} from "./CreateAccountFormStyled";
import { ButtonField, InputArea } from "../LoginForm/LoginFormStyled";
import logo from "../../assets/logo.png";
import { useRouter } from "next/navigation";

function CreateAccountForm() {
  const router = useRouter();
  return (
    <Container>
      <Heading>
        <Logo src={logo} alt="logo com as iniciais da empresa WilsonSons" />
        <h1>Criar Nova Conta</h1>
        <h3>Preencha seus dados para acessar o sistema</h3>
      </Heading>
      <FormField action="" id="criarConta">
        <Fieldset>
          <legend>Cadastro de Conta</legend>
          <FieldsetContainer>
            <legend>Dados Pessoais</legend>
            <FieldsetContent>
              <label htmlFor="nomeCompletoCadastro">Nome Completo</label>
              <InputArea
                width="large"
                type="text"
                name="nomeCompletoCadastro"
                id="nomeCompletoCadastro"
                placeholder="Nome Completo"
                responsive
              />
            </FieldsetContent>
            
            <FieldsetContent>
              <label htmlFor="emailCadastro">Email</label>
              <InputArea
                width="large"
                type="email"
                name="emailCadastro"
                id="emailCadastro"
                placeholder="Email"
                responsive
              />
            </FieldsetContent>
          </FieldsetContainer>

          <FieldsetContainer>
            <legend>Credenciais de Acesso</legend>
            <FieldsetContent>
              <label htmlFor="senhaCadastro">Senha</label>
              <InputArea
                width="large"
                type="password"
                name="senhaCadastro"
                id="senhaCadastro"
                placeholder="Senha"
                responsive
              />
            </FieldsetContent>
            <FieldsetContent>
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <InputArea
                width="large"
                type="password"
                name="confirmarSenha"
                id="confirmarSenha"
                placeholder="Confirmar Senha"
                responsive
              />
            </FieldsetContent>
          </FieldsetContainer>

          <FieldsetContainer>
            <legend>Posição na empresa</legend>
            <FieldsetContent>
              <label htmlFor="cargo">Cargo</label>
              <InputArea
                width="xLarge"
                type="text"
                name="cargo"
                id="cargo"
                placeholder="Cargo"
              />
            </FieldsetContent>
          </FieldsetContainer>

          {/* <label htmlFor="salario">Salário</label>
          <InputArea width="xLarge" type="text" name="salario" id="salario" /> */}

          <ButtonField>
            <Button label="Cadastrar" />
            <Button
              label="Cancelar"
              buttonAction="cancelar"
              type="button"
              onClick={() => router.push("/login")}
            />
          </ButtonField>
        </Fieldset>
      </FormField>
    </Container>
  );
}

export default CreateAccountForm;
