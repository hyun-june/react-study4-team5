import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

const HeaderContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: 8,
  paddingInline: 16,
  margin: 16,
  backdropFilter: "blur(3px)",
  backgroundColor: "rgba(100, 100, 100, 0.1)",
  boxShadow:
    "-4px -4px 8px rgba(100, 100, 100, 0.1), 4px 4px 10px rgba(100, 100, 100, 0.1)",
});

const LogoTitle = styled(Typography)({
  color: "white",
  fontWeight: "900",
  fontSize: "24px",
  cursor: "pointer ",
});

const HeaderMenuContainer = styled(Box)({
  display: "flex",
  gap: 16,
});

const HeaderMenuButton = styled(Button)({
  color: "white",
  fontSize: "12px",
});

const HeaderIconBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});

const HeaderSearchBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0.8px solid white",
  borderRadius: "30px",
  paddingInline: 8,
  paddingBlock: 2,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
});

const HeaderSearch = styled(TextField)({
  // borderBottom: "1px solid white",
  "& .MuiInputBase-root": {
    height: "24px",
    width: "100px",
    color: "white",
  },
  "& .MuiInputBase-input": {
    padding: "0 8px",
    fontSize: "14px",
  },
  "& fieldset": {
    border: "none",
  },
});

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Box display={"flex"} gap={3}>
        <LogoTitle onClick={() => navigate("/")}>Travel Now</LogoTitle>
        <HeaderMenuContainer>
          <HeaderMenuButton onClick={() => navigate("/")}>
            Home
          </HeaderMenuButton>
          <HeaderMenuButton onClick={() => navigate("/cities")}>
            Cities
          </HeaderMenuButton>
        </HeaderMenuContainer>
      </Box>
      <HeaderIconBox>
        <HeaderSearchBox>
          <SearchIcon fontSize="small" sx={{ color: "white" }} />
          <HeaderSearch />
        </HeaderSearchBox>
        <LoginIcon
          fontSize="small"
          sx={{ color: "white" }}
          onClick={() => navigate("/login")}
          cursor={"pointer"}
        />
      </HeaderIconBox>
    </HeaderContainer>
  );
};

export default Header;
