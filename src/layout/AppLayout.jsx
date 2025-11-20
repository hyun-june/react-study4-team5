import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAiButton from "./../components/FloatingAiButton";
import { Box } from "@mui/material";

const AppLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <FloatingAiButton />
      <Footer />
    </Box>
  );
};

export default AppLayout;
