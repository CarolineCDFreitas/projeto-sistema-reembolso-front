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

export const TextField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid darkcyan; */
  max-width: 400px;
`;

export const LoginField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  padding: 0.75rem;
  margin: 0 auto;
  min-width: clamp(350px, 20vw, 550px);
  /* border: 2px solid goldenrod; */

  @media (max-width: 481px) {
    width: 100%;
    min-width: auto;
  }
`;

export const Logo = styled(Image)`
  width: 35%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #23282f;
  margin: 0.75rem;
  text-align: center;
  line-height: 1.5;
  /* border: 2px solid blue; */
`;
export const Paragraph = styled.p`
  color: #0844c4;
  font-size: 1rem;
  font-weight: 700;
  margin-block-end: 0.75rem;
`;

// clip-path para cortar um pouco do topo da imagem e transforma translateY(height) para ajustar a imagem porque clip-path apenas corta, mas o espaço vazio fica.
