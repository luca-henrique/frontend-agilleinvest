/* eslint-disable no-sparse-arrays */
import React from "react";

import { ReactComponent as SmileIcon } from "~/assets/icons/smile.svg";
import { ReactComponent as MoneyIcon } from "~/assets/icons/money.svg";
import { ReactComponent as GroupPeopleIcon } from "~/assets/icons/peoples.svg";

import { ReactComponent as ComputerIcon } from "~/assets/icons/phonelink.svg";
import { ReactComponent as StarIcon } from "~/assets/icons/star.svg";
import { ReactComponent as ChartIcon } from "~/assets/icons/chart.svg";

export const QuemSomos = [
  {
    titulo: "Entendemos sua necessidade",
    descricao:
      "Identificamos as suas necessidades para entregar uma plataforma completa.",
    icon: <SmileIcon />,
  },
  {
    titulo: "Fazemos você receber",
    descricao: "Receba o seu rendimento com praticidade e agilidade.",
    icon: <MoneyIcon />,
  },
  ,
  {
    titulo: "Mais de 10+ mil clientes",
    descricao:
      "Resolvemos as frustrações e incertezas dos processos de mais de 10 mil pessoas.",
    icon: <GroupPeopleIcon />,
  },
  ,
  {
    titulo: "Plataforma prática e acessível",
    descricao:
      "Acesse a nossa plataforma de qualquer lugar, com qualquer dispositivo.",
    icon: <ComputerIcon />,
  },
  ,
  {
    titulo: "Ótimas recomendações",
    descricao:
      "Nossa plataforma é bem avaliada e recomendada por todo o Brasil.",
    icon: <StarIcon />,
  },
  ,
  {
    titulo: "Indicações feitas para você",
    descricao: "Tenha em suas mãos indicações feitas exclusivamente para você",
    icon: <ChartIcon />,
  },
];
