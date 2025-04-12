import { Message } from "./ErrorMessageStyled";

function ErrorMessage({ children, compactSpace }) {
  return <Message compactSpace={compactSpace}>{children}</Message>;
}

export default ErrorMessage;
