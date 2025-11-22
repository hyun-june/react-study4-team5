import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAiButton from "./../components/FloatingAiButton";
import { Box } from "@mui/material";
import { useToastStore } from "../store/useToastStore";

import ToastAlarm from "../components/ToastAlarm";

const AppLayout = () => {
  const { toast, setToast } = useToastStore();

  return (
    <Box>
      <Header />
      <Box sx={{ position: "relative" }}>
        <Outlet />
        <FloatingAiButton />
        {toast && <ToastAlarm toast={toast} onClose={() => setToast(null)} />}
      </Box>

      <Footer />
    </Box>
  );
};

export default AppLayout;
