import {
  LoginField,
  TextField,
  Logo,
  Title,
  Paragraph,
} from "./LoginContentStyled";
import LoginForm from "../LoginForm/LoginForm";
import logo from "../../assets/logo.png";

function LoginContent() {
  return (
    <LoginField>
      <TextField>
        <Logo src={logo} alt="logo da empresa Wilson" />
        <Title> Boas vindas ao Novo Portal SISPAR</Title>
        <Paragraph>Sistema de Emissão de Boletos e Parcelamento</Paragraph>
      </TextField>
      <LoginForm />
    </LoginField>
  );
}

export default LoginContent;
