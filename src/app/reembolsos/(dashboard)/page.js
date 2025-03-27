"use client";
import {
  DashboardCards,
  DashboardStats,
  DashbardWrapper,
  TextContainer,
} from "../components/Dashboard";

export default function Reembolsos() {
  return (
    <DashbardWrapper>
      <TextContainer>
        <h1>Sistemas de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>
      </TextContainer>
      <DashboardCards />
      <DashboardStats />
    </DashbardWrapper>
  );
}
