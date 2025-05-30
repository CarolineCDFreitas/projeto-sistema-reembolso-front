"use client";
import Button from "@/components/Button/Button";
import {
  HeaderStyled,
  Menus,
  NavListStyled,
  ImageStyled,
  UserInfo,
} from "./HeaderStyle";
import { PiHouse } from "react-icons/pi";
import {
  MdLogout,
  MdMenuOpen,
  MdOutlineRequestQuote,
  MdContentPaste,
  MdHistory,
} from "react-icons/md";
import Profile from "@/assets/imageProfile.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/services/auth/authServices";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/services/api/api";

function Header() {
  const [menuToggler, setMenuToggler] = useState(false);

  const menuOpener = () => {
    setMenuToggler(!menuToggler);
  };

  const router = useRouter();

  const queryClient = useQueryClient();
  const fetchUserInfo = () =>
    api.get("/colaborador/info").then((response) => response.data);

  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
  });

  return (
    <HeaderStyled menu={menuToggler}>
      <Button
        place="menu"
        type="button"
        title="Menu"
        aria-label="Menu de navegação"
        aria-haspopup="true"
        onClick={() => menuOpener()}
      >
        <MdMenuOpen />
      </Button>
      <UserInfo menu={menuToggler}>
        <ImageStyled src={Profile} alt="ícone de anônimo" />
        <section menu="false">
          <h2 menu="false">{data?.nome || "nome"}</h2>
          <p>{data?.cargo || "cargo"}</p>
        </section>
      </UserInfo>
      <nav>
        <NavListStyled menu={menuToggler}>
          <li>
            <Menus href="/reembolsos" aria-label="Início" title="Início">
              <PiHouse />
            </Menus>
            <span>Início</span>
          </li>
          <li>
            <Menus
              href="/reembolsos/solicitacao"
              aria-label="Reembolsos"
              title="Reembolsos"
            >
              <MdOutlineRequestQuote />
            </Menus>
            <span>Reembolsos</span>
          </li>
          <li>
            <Menus href="" aria-label="Análise" title="Análise">
              <MdContentPaste />
            </Menus>
            <span>Análise</span>
          </li>
          <li>
            <Menus href="" aria-label="Histórico" title="Histórico">
              <MdHistory />
            </Menus>
            <span>Histórico</span>
          </li>
        </NavListStyled>
      </nav>
      <Button
        place="menu"
        buttonAction="sair"
        title="Sair"
        aria-label="Logout"
        onClick={() => {
          deleteToken();
          queryClient.clear();
          router.push("/");
        }}
      >
        <MdLogout />
      </Button>
    </HeaderStyled>
  );
}

export default Header;
