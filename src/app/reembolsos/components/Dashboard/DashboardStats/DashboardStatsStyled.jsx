import styled from "@emotion/styled";

const colors = {
  azul: "#00BEDD",
  laranja: "#E56700",
  verde: "#007A6A",
  vermelho: "#A60B2F",
  branco: "#fff",
};

export const IconWrapper = styled.div`
  padding: 0.3438rem 0.4375rem;
  border-radius: 0.275rem;
  color: ${colors.branco};
  text-align: center;
  background-color: ${({ cor }) => colors[cor]};
`;
export const StatusContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  border: 0.05rem solid #cbd4e1;
  border-radius: 0.375rem;
  padding: 1rem 0;
  color: #23282F;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:first-of-type svg {
    transform: rotateX(180deg);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SystemUpdateContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #0844c4;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
