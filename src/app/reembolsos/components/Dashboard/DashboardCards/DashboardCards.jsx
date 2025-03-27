import Cards from "../../Cards/Cards";
import { MdHistory, MdAssignmentAdd } from "react-icons/md";
import { PiListBullets } from "react-icons/pi";
import { CardsWrapper, SubTitle } from "./DashboardCardsStyled";

function DashboardCards() {
  return (
    <CardsWrapper>
      <Cards href="/reembolsos/solicitacao">
        <MdAssignmentAdd /> <SubTitle>Solicitar Reembolso</SubTitle>
      </Cards>
      <Cards href="#" adjustingPadding>
        <MdHistory /> <SubTitle>Histórico</SubTitle>
      </Cards>
      <Cards href="#">
        <PiListBullets /> <SubTitle> Verificar análises</SubTitle>
      </Cards>
    </CardsWrapper>
  );
}

export default DashboardCards;
