import React from "react";

import { useSelector } from "react-redux";
import Default from "./Default";
import Main from "./Main";
import Investidor from "./Investidor";
import Vendedor from "./Vendedor";

const Index = () => {
  const type = useSelector((state) => state.banner.bannerSelect);
  const Banner = {
    main: <Main />,
    default: <Default />,
    investidor: <Investidor />,
    vendedor: <Vendedor />,
  };

  return <>{Banner[type]}</>;
};

export default Index;
