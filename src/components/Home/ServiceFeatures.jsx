import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from "@mui/material";

import ExploreIcon from "@mui/icons-material/Explore";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

import React from "react";

const FeaturesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBlock: "clamp(4rem, 6rem, 10rem)",
  paddingInline: "clamp(1rem, 3rem, 10rem)",
});

const FeatureCard = styled(Box)(({ iconColor }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  textAlign: "center",
  borderRadius: "16px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 0 24px rgba(0, 0, 0, 0.1)",
  },
  "& .icon-wrapper": {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: iconColor || "#4f4f4fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    boxShadow: `0 0 15px ${iconColor}`,
    "& svg": {
      fontSize: "2.5rem",
      color: "#ffffffff",
    },
  },
}));

const features = [
  {
    icon: <ExploreIcon />,
    title: "다양한 여행지 추천",
    description: "전 세계 인기 여행지와 숨은 명소를 발견하세요.",
    iconColor: "rgba(129, 183, 255, 0.6)",
  },
  {
    icon: <WbSunnyIcon />,
    title: "실시간 날씨 정보",
    description: "여행지의 현재 날씨와 예보를 확인하세요.",
    iconColor: "rgba(255, 149, 125, 0.6)",
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: "환율 정보 제공",
    description: "최신 환율 정보로 여행 예산을 계획하세요.",
    iconColor: "rgba(255, 129, 181, 0.6)",
  },
  {
    icon: <PhotoLibraryIcon />,
    title: "생생한 여행 콘텐츠",
    description: "이미지와 동영상으로 여행지를 미리 경험하세요.",
    iconColor: "rgba(155, 234, 86, 0.6)",
  },
];

const ServiceFeatures = () => {
  return (
    <FeaturesContainer>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {features.map((feature, index) => (
          <Grid
            item
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 6,
              lg: 6,
              xl: 3,
            }}
          >
            <FeatureCard iconColor={feature.iconColor}>
              <Box className="icon-wrapper">{feature.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 1.5,
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  fontFamily: "Pretendard",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "wrap",
                  wordBreak: "keep-all",
                  fontFamily: "Pretendard",
                }}
              >
                {feature.description}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </FeaturesContainer>
  );
};

export default ServiceFeatures;
