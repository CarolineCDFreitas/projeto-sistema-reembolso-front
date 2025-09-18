"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-start; */
  /* border: 2px solid magenta; */
  flex: 1;

  @media (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-start; */
    gap: 3rem;
    min-height: 100vh;
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

  @media (min-width: 1025px) and (max-width: 1461px) {
    width: 50%;
  }
`;
