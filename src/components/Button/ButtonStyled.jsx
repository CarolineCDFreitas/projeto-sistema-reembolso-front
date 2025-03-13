import styled from "@emotion/styled";
import { css } from "@emotion/react";

const colors = {
  azulEscuro: "#001A3D",
  azulClaro: "#00BEDD",
  azulNavy: "#0844C4",
  vermelho: "#A60B2F",
  white: "#fff",
  cinza: "#63758D",
};

const darkBlueButton = ["entrar", "editar", "salvar", "enviar"];
const lightBlueButton = ["criar", "limpar", "excluir", "fechar"];

const buttonHasIcon = ({ hasIcon }) => css`
  display: ${hasIcon ? "flex" : "inline-block"};
  gap: ${hasIcon ? "0.5rem" : "0"};
  align-items: ${hasIcon ? "center" : "initial"};
  justify-content: ${hasIcon ? "space-between" : "initial"};
`;

const getBackgroundColor = ({ buttonAction, place }) => {
  if (darkBlueButton.includes(buttonAction)) {
    return colors.azulEscuro;
  } else if (lightBlueButton.includes(buttonAction)) {
    return colors.azulClaro;
  } else if (buttonAction === "cancelar") {
    return place === "modal" ? colors.azulClaro : colors.vermelho;
  } else if (place === "menu" && buttonAction === "sair") {
    return colors.cinza;
  } else if (place === "menu") {
    return colors.azulNavy;
  } else {
    return colors.azulEscuro;
  }
};

const settingPadding = ({ buttonAction, place }) => {
  const buttonActionsOfLogin = ["entrar", "criar"];
  if (buttonActionsOfLogin.includes(buttonAction)) {
    return "0.7em 1.5em";
  }

  if (place === "menu") return ".725em";

  const buttonActionsOfMenu = ["salvar", "fechar"];
  if (buttonActionsOfMenu.includes(buttonAction)) return ".525em";

  return "0.75em 1.75em";
};

export const ButtonStyled = styled.button`
  background-color: ${getBackgroundColor};
  color: ${colors.white};
  border-radius: 0.375rem;
  padding: ${settingPadding};
  border: none;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  ${buttonHasIcon};
  height: fit-content;
`;

// 11
