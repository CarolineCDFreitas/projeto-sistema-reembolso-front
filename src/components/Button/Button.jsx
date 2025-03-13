import { ButtonStyled } from "./ButtonStyled.jsx";

/**
 *
 * @param {string} props.buttonAction - Define o estilo e o comportamento do botão.
 *  Valores aceitos: "entrar", "criar", "editar", "limpar", "salvar", "excluir", "enviar", "fechar", "sair", "cancelar".
 *  Quando `buttonAction` for "cancelar" e o `place` for "modal", o botão será estilizado para o modal.
 * @param {string} props.place - Define a localização do botão e influencia na estilização.
 * Valores aceitos: "menu", "modal"
 * @returns {JSX.Element} - O componente Button estilizado e reutilizável.
 */

function Button({ label, children, buttonAction, hasIcon, place, ...props }) {
  return (
    <ButtonStyled
      buttonAction={buttonAction}
      hasIcon={hasIcon}
      place={place}
      {...props}
    >
      {children || label}
    </ButtonStyled>
  );
}

export default Button;
