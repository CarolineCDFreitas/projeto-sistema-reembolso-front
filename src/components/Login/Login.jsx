import {
  Container,
  ImageStyle,
  LoginField,
  TextField,
  Logo,
  Title,
  Paragraph,
} from "./LoginStyled";
import LoginForm from "../LoginForm/LoginForm";
import backgroundImage from "../../assets/backgroundLogin.png";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <Container>
      <ImageStyle src={backgroundImage} alt="Navio cargueiro" priority />
      <LoginField>
        <TextField>
          <Logo src={logo} alt="logo da empresa Wilson" />
          <Title> Boas vindas ao Novo Portal SISPAR</Title>
          <Paragraph>Sistema de Emissão de Boletos e Parcelamento</Paragraph>
        </TextField>
        <LoginForm />
      </LoginField>
    </Container>
  );
}

export default Login;
