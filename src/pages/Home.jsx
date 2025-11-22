import { Box, Skeleton, Typography } from "@mui/material";
import CurrencyConverter from "../components/CurrencyConverter";
import TravelCard from "../components/TravelCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetImagesQuery } from "../hooks/useGetImages";
import { homeCities } from "../constants/homeCities";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const RandomCityTitle = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "clamp(3rem, 6vw, 8rem)",
  letterSpacing: "clamp(-2px, 6vw, -3px)",
  fontFamily: "ZenSerif",
  textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
  whiteSpace: "nowrap",
});

const Home = () => {
  const cities = [
    { country: "France", city: "Paris" },
    { country: "Japan", city: "Tokyo" },
    { country: "Brazil", city: "Rio de Janeiro" },
    { country: "USA", city: "New York" },
    { country: "Italy", city: "Rome" },
    { country: "Spain", city: "Barcelona" },
    { country: "Thailand", city: "Bangkok" },
    { country: "Canada", city: "Vancouver" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [randomCity, setRandomCity] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * homeCities.length);
    setRandomCity(homeCities[randomIndex]);
  }, []);

  const { data: images, isLoading } = useGetImagesQuery(randomCity?.name, {
    per_page: 3,
  });

  const imageUrl = images?.photos?.[0]?.src.landscape;

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {!isLoading && randomCity ? (
          <Box>
            <Box
              component="img"
              src={imageUrl}
              sx={{
                width: "100%",
                height: { xs: "500px", sm: "600px", md: "700px" },
                objectFit: "cover",
              }}
            />

            <RandomCityTitle>{randomCity?.name}</RandomCityTitle>
          </Box>
        ) : (
          <Skeleton animation="wave" variant="rectangular" height={480} />
        )}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom, transparent, #ffffff)",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          mt: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, mt: 3, fontWeight: 700 }}
        >
          인기 도시 투어
        </Typography>
      </Box>

      <Box sx={{ p: 2, mb: 5 }}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {cities.map((city) => (
            <Box
              key={city.city}
              sx={{ display: "flex", justifyContent: "center", p: 1 }}
            >
              <TravelCard countryName={city.country} cityName={city.city} />
            </Box>
          ))}
        </Carousel>
      </Box>

      <CurrencyConverter />
    </Box>
  );
};

export default Home;
