import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import TravelNowLogo from "../../assets/TravelNow_Logo_white.png";
import { useLoginStore } from "../../store/useLoginStore";

const HeaderContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "1.5rem",
  paddingInline: "2rem",
  backdropFilter: "blur(3px)",
  backgroundColor: "rgba(100, 100, 100, 0.1)",
  boxShadow: "4px 4px 10px rgba(100, 100, 100, 0.1)",
  zIndex: 1000,
});

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
  fontFamily: "Pretendard",
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

const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, logout } = useLoginStore();

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
        <HeaderSearchBox>
          <SearchIcon fontSize="small" sx={{ color: "white" }} />
          <HeaderSearch />
        </HeaderSearchBox>
        {isLogin ? (
          <LogoutIcon
            sx={{ color: "white" }}
            cursor={"pointer"}
            onClick={logout}
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
        <HeaderMenuButton>
          <MenuIcon />
        </HeaderMenuButton>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
