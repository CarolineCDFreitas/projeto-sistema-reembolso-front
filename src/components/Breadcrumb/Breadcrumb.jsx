'use client'

import { PiHouse } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";
import { BreadcrumbStyled, BreadcrumbContainer } from "./BreadcrumbStyled";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumb() {
  const routeInfos = [
    { name: "Reembolsos", path: "/reembolsos" },
    { name: "Solicitação de Reembolso", path: "/reembolsos/solicitacao" },
  ];
  const pathname = usePathname();

  const SearchRouteName = () => {
    const findingRouteName = routeInfos.find(
      (route) => route.path === pathname
    );
    if (findingRouteName) {
      return findingRouteName.name;
    }
  };

  const routeName = SearchRouteName();
  const routeURL = `localhost:300${pathname}`;

  return (
    <BreadcrumbContainer aria-label="Breadcrumb">
      <BreadcrumbStyled>
        <li>
          <PiHouse /> <MdArrowForwardIos />
          <Link href="/reembolsos">Reembolsos</Link>
        </li>

        {pathname !== "/reembolsos" && (
          <li>
            <MdArrowForwardIos />
            <Link href={routeURL}>{routeName}</Link>
          </li>
        )}
      </BreadcrumbStyled>
    </BreadcrumbContainer>
  );
}

export default Breadcrumb;
