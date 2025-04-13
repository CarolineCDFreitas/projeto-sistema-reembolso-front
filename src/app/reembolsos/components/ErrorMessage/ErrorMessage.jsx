import { Message } from "./ErrorMessageStyled";

function ErrorMessage({ children, compactSpace, hasError }) {
  return (
    <Message compactSpace={compactSpace} hasError={hasError}>
      {children}
    </Message>
  );
}

export default ErrorMessage;
