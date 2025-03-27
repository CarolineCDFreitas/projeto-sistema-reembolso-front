import {
  IconWrapper,
  StatusContainer,
  StatusWrapper,
  SystemUpdateContainer,
} from "../DashboardStats/DashboardStatsStyled";
import { BsArrowReturnLeft } from "react-icons/bs";
import {
  MdOutlineWatchLater,
  MdOutlineFileDownloadDone,
  MdClose,
  MdOutlineCloudDone,
  MdOutlineCloudOff,
} from "react-icons/md";
import { useState } from "react";

function DashboardStats() {
  const [stats, setStats] = useState({
    solicitados: 127,
    emAnalise: 6,
    aprovados: 127,
    rejeitados: 0,
    sistema: "atualizado",
  });

  const icons = new Map([
    ["atualizado", <MdOutlineCloudDone />],
    ["fora do ar", <MdOutlineCloudOff />],
  ]);

  const systemIcon = icons.get(stats.sistema);

  return (
    <>
      <StatusContainer>
        <StatusWrapper>
          <IconWrapper cor="azul">
            <BsArrowReturnLeft />
          </IconWrapper>
          <span>
            <b>{stats.solicitados}</b> Solicitados
          </span>
        </StatusWrapper>
        <StatusWrapper>
          <IconWrapper cor="laranja">
            <MdOutlineWatchLater />
          </IconWrapper>
          <span>
            <b>{stats.emAnalise}</b> Em análise
          </span>
        </StatusWrapper>
        <StatusWrapper>
          <IconWrapper cor="verde">
            <MdOutlineFileDownloadDone />
          </IconWrapper>
          <span>
            <b>{stats.aprovados}</b> Aprovados
          </span>
        </StatusWrapper>
        <StatusWrapper>
          <IconWrapper cor="vermelho">
            <MdClose />
          </IconWrapper>
          <span>
            <b>{stats.rejeitados}</b> Rejeitados
          </span>
        </StatusWrapper>
      </StatusContainer>

      <SystemUpdateContainer>
        {systemIcon} <span>Sistema {stats.sistema}.</span>
      </SystemUpdateContainer>
    </>
  );
}

export default DashboardStats;
