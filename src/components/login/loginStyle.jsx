import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px solid magenta; */

  @media (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-height: 100svh;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
export const ImageStyle = styled(Image)`
  width: 55%;
  height: 100vh;

  @media (max-width: 481px) {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    clip-path: inset(17% 0 0 0);
    transform: translateY(-17%);
  }
`;

// clip-path para cortar um pouco do topo da imagem e transforma translateY(height) para ajustar a imagem porque clip-path apenas corta, mas o espaço vazio fica.
