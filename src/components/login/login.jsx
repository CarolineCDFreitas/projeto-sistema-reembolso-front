import { Container, ImageStyle } from "./loginStyle";
import Input from "../input/input";
import backgroundImage from "../../assets/backgroundLogin.png"

function Login() {
  return (
    <Container>
      <ImageStyle src={backgroundImage} alt="Navio cargeiro" priority />
      <Input/>
    </Container>
  )
}

export default Login;
