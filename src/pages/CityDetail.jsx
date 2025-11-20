import { useLocation } from "react-router";
import { Box, Container, Typography, CardMedia } from "@mui/material";
import { useGetImagesQuery } from "../hooks/useGetImages";
import { useGetVideosQuery } from "../hooks/useGetVideos";
import CityVisual from "../components/cityDetail/CityVisual";
import CityInfo from "../components/cityDetail/CityInfo";
import CityImageList from "../components/cityDetail/CityImageList";
import CityVideo from "../components/cityDetail/CityVideo";

const CityDetail = () => {
    const query = new URLSearchParams(useLocation.search);
    const keyword = query?.get("name") || "South Korea";

    const {
        data: imageData,
        isLoading: imageLoading,
        isError: imageError,
        error: imageErrObj,
    } = useGetImagesQuery(keyword, { per_page: 12, locale: "ko-KR" });

    const {
        data: videoData,
        isLoading: videoLoading,
        isError: videoError,
        error: videoErrObj,
    } = useGetVideosQuery(keyword, { per_page: 6 });

    if (!keyword) return <Typography>검색어가 없습니다.</Typography>;
    if (imageLoading || videoLoading) return <Typography>컨텐츠 불러오는 중...</Typography>;
    if (imageError) return <Typography>이미지 에러: {imageErrObj?.message}</Typography>;
    if (videoError) return <Typography>비디오 에러: {videoErrObj?.message}</Typography>;

    const photos = imageData?.photos ?? [];
    const mainVideo = videoData?.videos?.[0];

    return (
        <Container sx={{ py: 4, backgroundColor: "#222" }}>
            <CityVisual keyword={keyword} photos={photos} />
            <CityInfo keyword={keyword} photos={photos} />
            <CityImageList keyword={keyword} photos={photos} />
            <CityVideo keyword={keyword} mainVideo={mainVideo} />
        </Container>
    );
};

export default CityDetail;
