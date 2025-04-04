import React from "react";
import { Header, MarketList } from "@/components/module/market";

const Market = () => {
  return (
    <div className="max-w-md md:max-w-3xl">
      <Header />
      <MarketList />
    </div>
  );
};

export default Market;