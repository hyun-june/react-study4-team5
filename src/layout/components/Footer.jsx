import { Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import TravelNowLogo from "../../assets/TravelNow_Logo_black.png";
import { useNavigate } from "react-router";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: 20,
  paddingInline: "5%",
  marginInline: "4%",
  backgroundColor: "white",
  borderTop: "1px solid black",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}));

const LogoBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8rem",
  cursor: "pointer",
});

const LogoImg = styled(Box)({
  display: "flex",
  width: "3rem",
  height: "3rem",
});

const FooterTitle = styled(Typography)({
  color: "black",
  fontFamily: "Stack Sans Notch",
  letterSpacing: "-0.5px",

  fontWeight: "900",
  fontSize: "36px",
});

const InfoBox = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  textDecoration: "none",
  fontSize: 16,
  color: "black",
});

const GitHubText = styled(Typography)({
  fontFamily: "Pretendard",
  fontWeight: "600",
  letterSpacing: "-0.5px",
});

const DeveloperInfo = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "Pretendard",
  width: 200,
  gap: 10,
});

const DeveloperLink = styled("a")({
  fontFamily: "Pretendard",
  textDecoration: "none",
  color: "gray",
  width: 95,
  "&:hover": {
    color: "#90cb47ff",
  },
});

const developers = [
  { name: "@victoryalhj", url: "https://github.com/victoryalhj" },
  { name: "@hyun-june", url: "https://github.com/hyun-june" },
  { name: "@JiHyoung", url: "https://github.com/JiHy0ung" },
  { name: "@joooo24", url: "https://github.com/joooo24" },
];

const DevelopersInfo = ({ name, url }) => {
  return (
    <DeveloperLink href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </DeveloperLink>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <LogoBox onClick={() => navigate("/")}>
        <LogoImg component="img" src={TravelNowLogo} />
        <FooterTitle color="black">Travel Now</FooterTitle>
      </LogoBox>

      <Box sx={{ display: "flex", gap: { md: 5, sm: 4, xs: 4 } }}>
        <InfoBox
          href="https://github.com/hyun-june/react-study4-team5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="small" />
          <GitHubText color="black">Travel Now</GitHubText>
        </InfoBox>
        <Box>
          <Typography
            color="black"
            fontWeight={700}
            borderBottom={"1px solid #0000007d"}
            marginBottom={1}
          >
            Developers
          </Typography>
          <DeveloperInfo>
            {developers.map(({ name, url }) => (
              <DevelopersInfo name={name} url={url} key={name} />
            ))}
          </DeveloperInfo>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
