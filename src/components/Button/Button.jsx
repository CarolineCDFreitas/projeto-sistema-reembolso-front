import { ButtonStyled } from "./ButtonStyled.jsx";

function Button({ label, children, action, hasIcon, isModal, place }) {
  return (
    <ButtonStyled
      action={action}
      hasIcon={hasIcon}
      isModal={isModal}
      place={place}
    >
      {children || label}
    </ButtonStyled>
  );
}

export default Button;
