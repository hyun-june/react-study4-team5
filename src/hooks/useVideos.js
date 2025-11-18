import { useQuery } from "@tanstack/react-query";
import { videoApi } from "../utils/apis/imageApi";

const fetchVideos = ({ queryKey }) => {
    const [, keyword, options] = queryKey;
    return videoApi.get("/search", {
        params: { query: keyword, ...options },
    });
};

export const useVideosQuery = (keyword, options = {}) => {
    return useQuery({
        queryKey: ["videos", keyword, options],
        queryFn: fetchVideos,
        enabled: !!keyword,
        select: (res) => res.data,
        staleTime: 5 * 60 * 1000,
    });
};
