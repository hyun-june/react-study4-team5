import { useQueries } from "@tanstack/react-query";
import { getCountryInfo } from "../utils/apis/countries";

export const useGetCities = (cities) => {
  return useQueries({
    queries: cities.map((city) => ({
      queryKey: ["city", city],
      queryFn: () => getCountryInfo(city),
      staleTime: 1000 * 60 * 60,
    })),
  });
};
