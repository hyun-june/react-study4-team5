import { useQuery } from "@tanstack/react-query";
import { getCityDescription } from "../utils/apis/geminiAPI";

export const useGetCityDescriptionQuery = (keyword) => {
    return useQuery({
        queryKey: ["cityDescription", keyword],
        queryFn: () => getCityDescription(keyword),
        enabled: !!keyword,
        staleTime: 5 * 60 * 1000, // 5분
    });
};
