import { useQuery } from "@tanstack/react-query";
import { imageApi } from "../utils/apis/imageApi";

const fetchImages = ({ queryKey }) => {
    const [, keyword, options] = queryKey;
    return imageApi.get("/search", {
        params: { query: keyword, ...options },
    });
};

export const useImagesQuery = (keyword, options = {}) => {
    return useQuery({
        queryKey: ["images", keyword, options],
        queryFn: fetchImages,
        enabled: !!keyword,
        select: (res) => res.data,
        staleTime: 5 * 60 * 1000,
    });
};
