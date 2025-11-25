import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ToastBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible",
})(({ visible, type }) => ({
  padding: "1em",
  position: "relative",
  backgroundColor: "white",
  boxShadow:
    "-4px -4px 8px rgba(100, 100, 100, 0.1), 4px 4px 10px rgba(100, 100, 100, 0.1)",

  transform: visible ? "translateX(0)" : "translateX(10px)",
  opacity: visible ? 1 : 0,
  transition: "opacity 0.4s ease, transform 0.4s ease",

  "&::after": {
    content: '""',
    left: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: type === "warn" ? "red" : "var(--main-point-green)",
    animation: "alertFill 3s ease forwards",
  },

  "&::before": {
    content: '""',
    left: 0,
    bottom: 0,
    position: "absolute",
    width: 10,
    height: "100%",
    backgroundColor: type === "warn" ? "#F28B82" : "var(--main-point-green)",
  },
}));

const ToastMessage = styled(Typography)({
  color: "black",
  fontWeight: "bold",
  padding: "0 0.5em",
  position: "relative",
});

const ToastAlarm = ({ ...props }) => {
  const { toast, onClose } = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 400);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box sx={{ position: "absolute", top: 100, right: 10 }}>
      <ToastBox visible={visible} type={toast?.type}>
        <ToastMessage>{toast?.msg}</ToastMessage>
      </ToastBox>
    </Box>
  );
};

export default ToastAlarm;
