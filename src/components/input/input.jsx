import {
  LoginField,
  InputField,
  TextField,
  InputArea,
  Title,
  Logo,
  Paragraph,
  ForgotMyPassword,
} from "./inputStyle";
import logo from "../../assets/logo.png";
import Link from "next/link";

function Input() {
  return (
    <LoginField>
      <TextField>
        <Logo src={logo} alt="logo da empresa Wilson" />
        <Title> Boas vindas ao Novo Portal SISPAR</Title>
        <Paragraph>Sistema de Emissão de Boletos e Parcelamento</Paragraph>
      </TextField>

      <InputField>
        <InputArea type="email" placeholder="Email" />
        <InputArea type="text" placeholder="Senha" />

        <ForgotMyPassword href="/"> Esqueci minha senha</ForgotMyPassword>
      </InputField>
    </LoginField>
  );
}

export default Input;
