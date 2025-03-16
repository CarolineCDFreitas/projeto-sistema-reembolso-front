import Button from "../Button/Button";
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
import Profile from "../../assets/imageProfile.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

const name = "Kim Jungwoo";
const jobTitle = "Love of My Life";

function Header() {
  const [menu, setMenu] = useState(false);

  const menuOpener = () => {
    setMenu(!menu);
  };

  const router = useRouter();

  return (
    <HeaderStyled menu={menu}>
      <Button place="menu" type="button" onClick={() => menuOpener()}>
        <MdMenuOpen />
      </Button>
      <UserInfo menu={menu}>
        <ImageStyled src={Profile} alt="ícone de anônimo" />
        <details menu="false" open={menu}>
          <summary menu="false">{name}</summary>
          <p>{jobTitle}</p>
        </details>
      </UserInfo>
      <nav>
        <NavListStyled menu={menu}>
          <li menu="false">
            <Menus href="/reembolsos" aria-label="Início">
              <PiHouse />
            </Menus>
            <span>Início</span>
          </li>
          <li menu="false">
            <Menus href="/reembolsos/solicitacao" aria-label="Reembolsos">
              <MdOutlineRequestQuote />
            </Menus>
            <span>Reembolsos</span>
          </li>
          <li menu="false">
            <Menus href="" aria-label="Análise">
              <MdContentPaste />
            </Menus>
            <span>Análise</span>
          </li>
          <li menu="false">
            <Menus href="" aria-label="Histórico">
              <MdHistory />
            </Menus>
            <span>Histórico</span>
          </li>
        </NavListStyled>
      </nav>
      <Button place="menu" buttonAction="sair" onClick={() => router.push("/")}>
        <MdLogout />
      </Button>
    </HeaderStyled>
  );
}

export default Header;
