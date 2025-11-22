import { Box, Typography } from "@mui/material";
import CitySlide from "../components/CitySlide";
import Banner from "../components/Home/Banner";
import CurrencyConverter from "../components/Home/CurrencyConverter";
import ServiceFeatures from "../components/Home/ServiceFeatures";

const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Banner />
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

      <CitySlide />

      <CurrencyConverter />
    </Box>
  );
};

export default Home;
