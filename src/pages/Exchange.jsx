import React from "react";
import { useGetExchangeRateQuery } from "../hooks/useGetExchangeRate";

const Exchange = () => {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "");

  const { data } = useGetExchangeRateQuery(today);

  console.log("ddd", data);
  return <div>Exchange</div>;
};

export default Exchange;
