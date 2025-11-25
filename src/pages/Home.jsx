import { Box, Typography } from "@mui/material";
import CitySlide from "../components/CitySlide";
import Banner from "../components/Home/Banner";
import CurrencyConverter from "../components/Home/CurrencyConverter";
import ServiceFeatures from "../components/Home/ServiceFeatures";
import styled from "@emotion/styled";

const HomeContainer = styled(Box)({
  position: "relative",
});

const FeatureTitle = styled(Typography)({
  fontFamily: "Pretendard",
  textAlign: "center",
  fontWeight: 700,
  marginTop: "5rem",
  marginBottom: "1rem",
  fontSize: "clamp(2rem, 3rem, 4rem)",
  letterSpacing: "-1.5px",
  whiteSpace: "wrap",
  wordBreak: "keep-all",
  lineHeight: "1.25",
  paddingInline: "clamp(1rem, 3rem, 10rem)",
});

const FeatureParagraph = styled(Typography)({
  fontFamily: "Pretendard",
  textAlign: "center",
  fontSize: "clamp(1.25rem, 1.25rem, 2rem)",
  fontWeight: 400,
  paddingBottom: "7rem",
  whiteSpace: "wrap",
  wordBreak: "keep-all",
  paddingInline: "clamp(1rem, 3rem, 10rem)",
});

const Home = () => {
  return (
    <HomeContainer>
      <Banner />

      <FeatureTitle>여행의 시작, 세상을 탐험하세요</FeatureTitle>
      <FeatureParagraph>
        날씨부터 환율까지, 꿈꾸던 여행지의 모든 정보를 손쉽게 확인하고
        계획하세요
      </FeatureParagraph>

      <CitySlide />

      <ServiceFeatures />

      <CurrencyConverter />
    </HomeContainer>
  );
};

export default Home;
