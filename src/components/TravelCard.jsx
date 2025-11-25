import { useEffect, useState } from "react";
import { imageApi } from "../utils/apis/imageApi";
import { getWeatherByCity } from "../utils/apis/weatherAPI";
import { useNavigate } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavoriteStore } from "../store/useFavoriteStore";
import TravelNowLogo from "../assets/TravelNow_Logo_black.png";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";

const TravelCard = ({ data }) => {
  const countryName = data?.name?.common;
  const cityName = data?.capital;
  const population = data?.population.toLocaleString();
  const [weather, setWeather] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const { favorites, toggleFavorite } = useFavoriteStore();

  const cityKey = `${countryName}-${cityName}`;
  const isFavorite = favorites.includes(cityKey);

  const handleFavoriteClick = () => {
    toggleFavorite(cityKey);
  };

  const navigate = useNavigate();

  const handleMoreInfo = (e) => {
    const keyword = countryName;
    navigate(`/city/detail?name=${encodeURIComponent(keyword)}`);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(cityName);
        setWeather(data);
      } catch (error) {
        console.error("weather api error", error);
      }
    };
    fetchWeather();
  }, [cityName]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const query = `${cityName} ${countryName} landmark`;
        const response = await imageApi.get(
          `/search?query=${query}&per_page=1`
        );

        if (response.data.photos && response.data.photos.length > 0) {
          const fetchedUrl = response?.data?.photos[0]?.src.large;
          setImageUrl(fetchedUrl);
        } else {
          setImageUrl("");
        }
      } catch (error) {
        console.error("image error", error);
        setImageUrl("");
      }
    };
    fetchImage();
  }, [cityName, countryName]);

  return (
    <Box
      onClick={(e) => {
        if (e.target.closest(".favorite-btn")) return;
        handleMoreInfo();
      }}
      sx={{ cursor: "pointer" }}
    >
      <Card
        sx={{
          width: 300,
          height: 400,
          position: "relative",
          mb: 6,
        }}
      >
        {imageUrl ? (
          <>
            <CardMedia
              component="img"
              sx={{ height: 400, width: 300, objectFit: "cover" }}
              // height="200"
              image={imageUrl}
              alt={cityName}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                zIndex: 1,
              }}
            ></Box>
            <IconButton
              aria-label="add to favorites"
              className="favorite-btn"
              onClick={handleFavoriteClick}
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                zIndex: 10,
                color: isFavorite ? "error.main" : "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "transparent",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                height: 400,
                justifyContent: "space-between",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  mb: 1,
                }}
              ></Box>

              <Box>
                <Typography variant="body2">
                  {countryName}, {cityName}
                </Typography>
                <Typography variant="body2">인구: {population}</Typography>
                <Typography variant="body2">
                  날씨: {weather?.weather[0]?.description},{" "}
                  {weather?.main?.temp}°C
                </Typography>
                <Typography variant="body2">
                  통화:
                  {Object.values(data?.currencies || {})
                    .map((c) => `${c?.name} (${c?.symbol})`)
                    .join(", ")}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleMoreInfo}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    mt: 0.5,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  More Information
                </Button>
              </Box>
            </CardContent>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={TravelNowLogo}
              sx={{ width: "1.625rem", height: "1.625rem" }}
            />

            <Typography
              sx={{ fontFamily: "Stack Sans Notch", fontSize: "20px" }}
            >
              TravelNow
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default TravelCard;
