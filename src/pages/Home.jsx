import { Box, Typography } from "@mui/material";
import CurrencyConverter from "../components/CurrencyConverter";
import TravelCard from "../components/TravelCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          sx={{
            width: "100%",
            display: "block",
          }}
        />
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
        {" "}
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
