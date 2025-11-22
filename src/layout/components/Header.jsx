import { styled } from "@mui/material/styles";
import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import TravelNowLogo from "../../assets/TravelNow_Logo_white.png";
import { useLoginStore } from "../../store/useLoginStore";
import { useToastStore } from "../../store/useToastStore";
import { useState } from "react";

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1.5rem",
  paddingBottom: "1.3rem",
  paddingInline: "2rem",
  backdropFilter: "blur(3px)",
  backgroundColor: "rgba(100, 100, 100, 0.3)",
  boxShadow: "0px 10px 10px rgba(100, 100, 100, 0.3)",
  zIndex: 10000,
  [theme.breakpoints.down("md")]: {
    paddingTop: "1rem",
    paddingBottom: "0.8rem",
  },
}));

const LogoBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
});

const LogoImg = styled(Box)({
  display: "flex",
  width: "1.625rem",
  height: "1.625rem",
});

const LogoTitle = styled(Typography)({
  color: "white",
  fontFamily: "Stack Sans Notch",
  letterSpacing: "-0.5px",
  fontWeight: "900",
  fontSize: "24px",
  cursor: "pointer ",
});

const HeaderMenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 16,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeaderMenuButton = styled(Button)({
  color: "white",
  fontFamily: "Pretendard",
  fontWeight: "300",
  fontSize: "12px",
});

const HeaderIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeaderSearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0.8px solid white",
  borderRadius: "30px",
  width: "140px",
  paddingInline: 8,
  paddingBlock: 2,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const HeaderSearch = styled(TextField)(({ theme }) => ({
  fontFamily: "Pretendard",
  "& .MuiInputBase-root": {
    height: "28px",
    width: "120px",
    color: "white",
  },
  "& .MuiInputBase-input": {
    padding: "0 8px",
    fontSize: "14px",
  },
  "& fieldset": {
    border: "none",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiInputBase-root": {
      width: "200px",
      height: "32px",
    },
  },
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const MenuDrawer = styled(Drawer)({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  margin: "2rem",
  zIndex: 100001,
  "& .MuiPaper-root": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: "2rem",
    width: "250px",
    color: "white",
  },
});

const DrawerTitle = styled(Typography)({
  color: "black",
  fontFamily: "Stack Sans Notch",
  fontSize: "2rem",
  fontWeight: "900",
  letterSpacing: "-0.5px",
  cursor: "pointer",
});

const MobileDrawerButton = styled(Button)({
  fontFamily: "Pretendard",
  justifyContent: "flex-start",
  fontWeight: "600",
  color: "#000000",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "var(--main-point-green)",
    backgroundColor: "transparent",
  },
});

const Header = () => {
  const navigate = useNavigate();
  const { setToast } = useToastStore();
  const { isLogin, logout } = useLoginStore();
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    setToast({ type: "success", msg: "로그아웃 성공" });
    logout();
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const searchByKeyword = (e) => {
    e.preventDefault();

    navigate(`/cities?q=${keyword}`);
    setKeyword("");
  };

  return (
    <HeaderContainer>
      <Box display={"flex"} gap={3}>
        <LogoBox>
          <LogoImg component="img" src={TravelNowLogo} />
          <LogoTitle onClick={() => navigate("/")}>Travel Now</LogoTitle>
        </LogoBox>
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
        <HeaderSearchBox component="form" onSubmit={searchByKeyword}>
          <SearchIcon fontSize="small" sx={{ color: "white" }} />
          <HeaderSearch
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </HeaderSearchBox>
        {isLogin ? (
          <LogoutIcon
            sx={{ color: "white" }}
            cursor={"pointer"}
            onClick={handleLogout}
          />
        ) : (
          <LoginIcon
            fontSize="small"
            sx={{ color: "white" }}
            onClick={() => navigate("/login")}
            cursor={"pointer"}
          />
        )}
      </HeaderIconBox>
      <MobileMenu>
        <HeaderMenuButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </HeaderMenuButton>
      </MobileMenu>
      <MenuDrawer anchor="right" open={open} onClick={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <DrawerTitle onClick={() => handleNavigation("/")}>
            Travel Now
          </DrawerTitle>
          <HeaderMenuButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: "black" }} />
          </HeaderMenuButton>
        </Box>
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
          }}
        >
          <HeaderSearchBox component="form" onSubmit={searchByKeyword}>
            <SearchIcon fontSize="small" sx={{ color: "white" }} />
            <HeaderSearch
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </HeaderSearchBox>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <MobileDrawerButton
            disableRipple
            fullWidth
            onClick={() => handleNavigation("/")}
          >
            Home
          </MobileDrawerButton>
          <MobileDrawerButton
            disableRipple
            fullWidth
            onClick={() => handleNavigation("/cities")}
          >
            Cities
          </MobileDrawerButton>
        </Box>
      </MenuDrawer>
    </HeaderContainer>
  );
};

export default Header;
