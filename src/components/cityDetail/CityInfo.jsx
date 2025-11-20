import { useMemo } from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { useGetExchangeRateQuery } from "../../hooks/useGetExchangeRate";
import { useGetWeatherQuery } from "../../hooks/useGetWeather";
import { useGetCountryQuery } from "../../hooks/useGetCountry";

const Wrapper = styled(Container)({
    position: "relative",
    padding: "100px 0 32px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#f9f9f9",   
});  

const ImgBox = styled("div")({
    display: "flex",
    width: "100%",
    maxWidth: "400px",
    overflow: "hidden",
    borderRadius: "32px",
    color: "#f9f9f9",
});

const InfoBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // width: "100%",
    height: "500px",
    color: "#f9f9f9",
});

const StatusBox = styled("div")({
    width: "100%",
    padding: "40px 0",
    textAlign: "center",
    color: "#f9f9f9",
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
    const currentWeather = weatherData?.weather?.[0]?.description || "-";
    const currentTemp = weatherData?.main?.temp;
    const feelsLike = weatherData?.main?.feels_like;
    const humidity = weatherData?.main?.humidity;
    const windSpeed = weatherData?.wind?.speed;

    const isLoading = exchangeRateLoading || weatherLoading || countryLoading;
    const hasError = exchangeRateError || weatherError || countryError;

    const exchangeRate = exchangeRateData?.rates?.USD;
    const weather = weatherData || {};
    console.log("쭈 weather", weather);
    const mainPhoto = photos?.[5] ?? photos?.[0];

    if (!mainPhoto) {
        return (
            <StatusBox>
                <Typography variant="body2" color="text.secondary">
                    표시할 이미지가 없습니다.
                </Typography>
            </StatusBox>
        );
    }

    if (isLoading) {
        return (
            <StatusBox>
                <Typography variant="body2" color="text.secondary">
                    도시 정보를 불러오는 중입니다...
                </Typography>
            </StatusBox>
        );
    }

    if (hasError) {
        return (
            <StatusBox>
                <Typography variant="body2" color="error">
                    도시 정보를 불러오는 중 오류가 발생했습니다.
                </Typography>
            </StatusBox>
        );
    }

    return (
        <Wrapper>
            <ImgBox>
                <img
                    src={mainPhoto.src.medium}
                    alt={mainPhoto.alt}
                    style={{ display: "block", width: "100%", objectFit: "cover" }}
                />
            </ImgBox>

            <InfoBox>
                <div>
                    <Typography variant="h6" gutterBottom>
                        나라 정보
                    </Typography>
                    <Typography variant="body2">이름: {country?.name?.common ?? "-"}</Typography>
                    <Typography variant="body2">수도: {country?.capital ?? "-"}</Typography>
                    <Typography variant="body2">
                        인구: {country?.population ? country.population.toLocaleString() : "-"}
                    </Typography>
                    <Typography variant="body2">
                        통화: {country?.currencies ? Object.keys(country.currencies).join(", ") : "-"}
                    </Typography>
                </div>

                <div>
                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        환율 정보
                    </Typography>
                    <Typography variant="body2">
                        원화 10,000원 = {exchangeRate ? (10000 / exchangeRate).toFixed(2) : "-"} USD
                    </Typography>
                </div>

                <div>
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
                    <Typography variant="body2">풍속: {windSpeed !== undefined ? `${windSpeed} m/s` : "-"}</Typography>
                </div>
            </InfoBox>
        </Wrapper>
    );
};

export default CityInfo;
