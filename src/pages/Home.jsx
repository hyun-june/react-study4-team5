import { Box } from "@mui/material";
import CurrencyConverter from "../components/CurrencyConverter";

const Home = () => {
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
      <CurrencyConverter />
    </Box>
  );
};

export default Home;
