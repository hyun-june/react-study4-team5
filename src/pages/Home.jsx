import { Box } from "@mui/material";
import CurrencyConverter from "../components/CurrencyConverter";

const Home = () => {
  return (
    <Box>
      <Box
        component="img"
        src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
        width={"100%"}
      />
      <CurrencyConverter />
    </Box>
  );
};

export default Home;
