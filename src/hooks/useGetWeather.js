import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const WEATHER_API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

const fetchWeather = async (keyword) => {
    if (!keyword) return null;
    const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: keyword, units: "metric", appid: WEATHER_API_KEY },
    });
    return res.data;
};

export const useGetWeatherQuery = (keyword) => {
    return useQuery({
        queryKey: ["weather", keyword],
        queryFn: () => fetchWeather(keyword),
        enabled: !!keyword,
        staleTime: 1000 * 60 * 10,
    });
};
