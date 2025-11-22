import { useLocation } from "react-router";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useGetImagesQuery } from "../hooks/useGetImages";
import { useGetVideosQuery } from "../hooks/useGetVideos";
import CityVisual from "../components/cityDetail/CityVisual";
import CityInfo from "../components/cityDetail/CityInfo";
import CityImageList from "../components/cityDetail/CityImageList";
import CityVideo from "../components/cityDetail/CityVideo";
import CityMore from "../components/cityDetail/CityMore";
import styled from "@emotion/styled";

const Wrapper = styled(Box)({
  width: "100%",
  maxWidth: 1280,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto 80px",
  padding: "0 20px",
  boxSizing: "border-box",
  fontFamily: "Pretendard, sans-serif",
  fontSize: "16px",
  color: "#333",
});

const CityDetail = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("name") || "South Korea";

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
  if (imageLoading || videoLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#90cb47ff" }} />
        <Typography>컨텐츠 불러오는 중...</Typography>
      </Box>
    );
  }

  if (imageError)
    return <Typography>이미지 에러: {imageErrObj?.message}</Typography>;
  if (videoError)
    return <Typography>비디오 에러: {videoErrObj?.message}</Typography>;

  const photos = imageData?.photos ?? [];
  const mainVideo = videoData?.videos?.[0];

  return (
    <Wrapper>
      <CityVisual keyword={keyword} photos={photos} />
      <CityInfo keyword={keyword} photos={photos} />
      <CityImageList keyword={keyword} photos={photos} />
      <CityVideo keyword={keyword} mainVideo={mainVideo} />
      <CityMore />
    </Wrapper>
  );
};

export default CityDetail;
