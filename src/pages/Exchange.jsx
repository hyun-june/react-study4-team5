import React from "react";
import { useGetExchangeRateQuery } from "../hooks/useGetExchangeRate";
import { today } from "../constants/todayDate";

const Exchange = () => {
  const { data } = useGetExchangeRateQuery(today);

  console.log("ddd", data);
  return <div>Exchange</div>;
};

export default Exchange;
