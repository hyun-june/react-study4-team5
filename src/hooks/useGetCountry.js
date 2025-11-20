import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const COUNTRY_API_URL = import.meta.env.VITE_API_COUNTRY_URL;

const fetchCountry = async (keyword) => {
    if (!keyword) return null;
    const res = await axios.get(`${COUNTRY_API_URL}/name/${keyword}`, {
        params: { fullText: false },
    });
    return res.data;
};

export const useGetCountryQuery = (keyword) => {
    return useQuery({
        queryKey: ["country", keyword],
        queryFn: () => fetchCountry(keyword),
        enabled: !!keyword,
        staleTime: 1000 * 60 * 60,
    });
};
