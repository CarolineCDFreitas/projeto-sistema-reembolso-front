import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

const fadeIn = keyframes`
  from {
    opacity: 0;
    /* width: 0; */
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    /* width: fit-content; */
    /* margin-inline-start: 0.5rem; */
    visibility: visible;
  }
`;

// Keyframes para fade out
const fadeOut = keyframes`
    from {
    opacity: 1;
    /* width: fit-content; */
    /* margin-inline-start: 0.5rem; */
    visibility: visible;
  }
  to {
    opacity: 0;
    /* width: 0; */
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    visibility: hidden;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid rebeccapurple; */
  padding: 1.25rem;
  margin-left: 0.125rem;
  width: ${({ menu }) => (menu ? "180px" : "fit-content")};
  height: 100vh;
  box-shadow: ${({ menu }) => (menu ? "4px 0px 12px 0px #0A0F1E1F" : "0")};
  transition: width 0.3s ease;
  position: fixed;
  background-color: white;

  button,
  nav {
    align-self: flex-start;
  }
`;

export const ImageStyled = styled(Image)`
  /* border: 2px solid forestgreen; */
  width: 40px;
  height: 40px;
`;

export const Menus = styled(Link)`
  padding: 0.725em;
  background-color: #0844c4;
  border-radius: 0.375rem;
  color: white;
  align-content: center;
  height: fit-content;
  width: fit-content;

  &:hover,
  &:active {
    background-color: #073db0;
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: ${({ menu }) => (menu ? "start" : "center")};
  justify-content: space-between;
  gap: 1rem;
  /* border: 2px solid maroon; */
  transition: align-items ease 0.3s;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* border: 2px solid olive; */

    span {
      visibility: ${({ menu }) => (menu ? "visible" : "hidden")};
      width: ${({ menu }) => (menu ? "fit-content" : "0")};
      margin-inline-start: 0.5rem;
      transition: span ease-in 0.2s;
      /* border: 2px solid purple; */
      animation: ${({ menu }) => (menu ? fadeIn : fadeOut)} 0.3s ease fowards;
    }
  }
`;

export const UserInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 6.5rem;
  width: fit-content;
  /* border: 2px solid darksalmon; */
  gap: 0.125rem;
  padding: ${({ menu }) => (menu ? "0.0175rem" : "0")};
  transition: padding ease 0.3s;

  section {
    /* border: 2px solid aquamarine; */
    visibility: ${({ menu }) => (menu ? "visible" : "hidden")};
    width: ${({ menu }) => (menu ? "fit-content" : "0")};
    height: ${({ menu }) => (menu ? "fit-content" : "0")};
    padding: 0.175rem;
    animation: ${({ menu }) => (menu ? fadeIn : fadeOut)} 0.3s ease forwards;
    overflow: hidden;

    h2 {
      font-weight: 700;
      font-size: 1rem;
      text-align: center;
      padding: ${({ menu }) => (menu ? "0" : "0.25rem")};
      transition: h2 ease 0.2s, height ease 0.2s;
      height: ${({ menu }) => (menu ? "fit-content" : "0")};
      /* border: 2px solid darkred; */
      animation: ${({ menu }) => (menu ? fadeIn : fadeOut)} 0.3s ease forwards;
    }

    p {
      font-size: 0.875rem;
      color: #0844c4;
      text-align: center;
      /* border: 2px solid seagreen; */
    }
  }
`;
