import React, { useEffect, useState } from "react";
import { getCountryInfo } from "../utils/apis/countries";
import { imageApi } from "../utils/apis/imageApi";
import { getWeatherByCity } from "../utils/apis/weatherAPI";
import { useNavigate } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";

const TravelCard = ({ countryName, cityName }) => {
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    console.log(`favorite status changed to: ${!isFavorite}`);
  };

  const navigate = useNavigate();

  const handleMoreInfo = () => {
    const keyword = countryName;
    navigate(`/city/detail?name=${encodeURIComponent(keyword)}`);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await getCountryInfo(countryName);
      setCountry(data);
      console.log("country", data);
    };
    fetchCountry();
  }, [countryName]);

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
        const response = await imageApi.get(
          `/search?query=${cityName}+${countryName}&per_page=1`
        );

        if (response.data.photos && response.data.photos.length > 0) {
          const fetchedUrl = response.data.photos[0]?.src.large;

          const finalImageUrl =
            fetchedUrl ||
            "https://via.placeholder.com/400x300/000000/FFFFFF?text=No+Image";
          setImageUrl(finalImageUrl);
          // console.log("Fetched Image URL:", fetchedUrl);
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

  if (!country || !weather) return <p>Loading...</p>;

  return (
    <div>
      <Card
        sx={{
          width: 300,
          margin: 1,
          position: "relative",
          height: 400,
          mb: 10,
          backgroundColor:"black",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 400, width: 300, objectFit: "cover" }}
          // height="200"
          image={imageUrl}
          alt={cityName}
        />
        <Box sx={{position:"absolute",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          backgroundColor:"rgba(0,0,0,0.4)",
          zIndex:1,
        }}>

        </Box>
        <IconButton
          aria-label="add to favorites"
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
            zIndex:2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mb: 1,
            }}
          >
            {" "}
          </Box>

          <Box>
            <Typography variant="body2">
              {country.name.common}, {country.capital}
            </Typography>
            <Typography variant="body2">
              인구: {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              날씨: {weather.weather[0].description}, {weather.main.temp}°C
            </Typography>
            <Typography variant="body2">
              통화:{" "}
              {Object.values(country.currencies)
                .map((c) => `${c.name} (${c.symbol})`)
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
      </Card>
    </div>
  );
};

export default TravelCard;
