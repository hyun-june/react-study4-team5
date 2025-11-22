import { useMemo } from "react";
import { styled } from "@mui/material/styles";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useGetExchangeRateQuery } from "../../hooks/useGetExchangeRate";
import { useGetWeatherQuery } from "../../hooks/useGetWeather";
import { useGetCountryQuery } from "../../hooks/useGetCountry";
import { useGetCityDescriptionQuery } from "../../hooks/useGetCityDescription";

const Section = styled("section")({
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "112px 0 32px",
    gap: "30px",
});

const Wrapper = styled("div")({
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "20px",
});

const ImgBox = styled("div")({
    height: "520px",
    borderRadius: "32px",
    display: "flex",
    width: "100%",
    overflow: "hidden",
    flex: 1,
});

const TextBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
});

const InfoBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "520px",
    flex: 1,
});

const CityInfo = ({ photos = [], keyword = "" }) => {
    const today = useMemo(() => new Date().toISOString().split("T")[0].replace(/-/g, ""), []);

    const {
        data: exchangeRateData,
        isLoading: exchangeRateLoading,
        isError: exchangeRateError,
    } = useGetExchangeRateQuery(today);

    const { data: countryData, isLoading: countryLoading, isError: countryError } = useGetCountryQuery(keyword);
    const country = countryData?.[0];
    const capital = country?.capital?.[0];

    const {
        data: weatherData,
        isLoading: weatherLoading,
        isError: weatherError,
    } = useGetWeatherQuery(capital || keyword);

    const { data: aiDescription, isLoading: aiLoading, isError: aiError } = useGetCityDescriptionQuery(keyword);

    const currentWeather = weatherData?.weather?.[0]?.description || "-";
    const currentTemp = weatherData?.main?.temp;
    const feelsLike = weatherData?.main?.feels_like;
    const humidity = weatherData?.main?.humidity;
    const windSpeed = weatherData?.wind?.speed;

    const isLoading = exchangeRateLoading || weatherLoading || countryLoading || aiLoading;
    const hasError = exchangeRateError || weatherError || countryError || aiError;

    const exchangeRate = exchangeRateData?.rates?.USD;
    const mainPhoto = photos?.[5] ?? photos?.[0];

    if (!mainPhoto) {
        return (
            <Box sx={{ padding: "8rem" }}>
                <CircularProgress sx={{ color: "#90cb47ff" }} />
            </Box>
        );
    }

    if (isLoading) {
        return (
            <Box sx={{ padding: "8rem" }}>
                <CircularProgress sx={{ color: "#90cb47ff" }} />
            </Box>
        );
    }

    if (hasError) {
        return (
            <Box sx={{ padding: "8rem" }}>
                <CircularProgress sx={{ color: "#90cb47ff" }} />
            </Box>
        );
    }

    return (
        <Section>
            <Wrapper>
                <TextBox>
                    <Typography
                        component={"h2"}
                        fontWeight={600}
                        fontSize={"1.8rem"}
                        width={"100%"}
                        borderBottom="2px solid #e9e9e9"
                        sx={{ mb: 3, pb: 1 }}
                    >
                        {keyword}을 소개합니다!
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                        {aiDescription}
                    </Typography>
                </TextBox>
            </Wrapper>
            <Wrapper>
                <ImgBox>
                    <img
                        src={mainPhoto.src.medium}
                        alt={mainPhoto.alt}
                        style={{ display: "block", width: "100%", objectFit: "cover" }}
                    />
                </ImgBox>
                <InfoBox>
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            나라 정보
                        </Typography>
                        <Typography variant="body2">이름: {country?.name?.common ?? "-"}</Typography>
                        <Typography variant="body2">수도: {country?.capital ?? "-"}</Typography>
                        <Typography variant="body2">
                            인구: {country?.population ? country.population.toLocaleString() : "-"}
                        </Typography>
                        <Typography variant="body2">
                            통화:{" "}
                            {country?.currencies
                                ? Object.entries(country.currencies)
                                      .map(([key, value]) => `${value.name} (${value.symbol})`)
                                : "-"}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            환율 정보
                        </Typography>
                        <Typography variant="body2">
                            원화 10,000원 = {exchangeRate ? (10000 / exchangeRate).toFixed(2) : "-"}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            현재 날씨
                        </Typography>
                        <Typography variant="body2">상태: {currentWeather}</Typography>
                        <Typography variant="body2">
                            기온: {currentTemp !== undefined ? `${currentTemp.toFixed(1)}°C` : "-"}
                        </Typography>
                        <Typography variant="body2">
                            체감: {feelsLike !== undefined ? `${feelsLike.toFixed(1)}°C` : "-"}
                        </Typography>
                        <Typography variant="body2">습도: {humidity !== undefined ? `${humidity}%` : "-"}</Typography>
                        <Typography variant="body2">
                            풍속: {windSpeed !== undefined ? `${windSpeed} m/s` : "-"}
                        </Typography>
                    </Box>
                </InfoBox>
            </Wrapper>
        </Section>
    );
};

export default CityInfo;
