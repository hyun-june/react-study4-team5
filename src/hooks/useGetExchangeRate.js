import { useQuery } from "@tanstack/react-query";
import ExchangeApi from "../utils/apis/ExchangeApi";

const fetchExchangeRate = (date) => {
  return ExchangeApi.get("/exchangeJSON", {
    params: { searchdate: date, data: "AP01" },
  });
};

export const useGetExchangeRateQuery = (date) => {
  return useQuery({
    queryKey: ["exchange-rate", date],
    queryFn: () => fetchExchangeRate(date),
    staleTime: 1000 * 60 * 60,
  });
};
