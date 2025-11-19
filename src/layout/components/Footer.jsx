import { Box, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";

const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: 20,
  paddingInline: 40,
  backgroundColor: "black",
});

const InfoBox = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  textDecoration: "none",
  fontSize: 16,
  color: "white",
});

const DeveloperInfo = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: 200,
  gap: 10,
  // justifyContent: "center",
});

const DeveloperLink = styled(Link)({
  textDecoration: "none",
  color: "gray",
  width: 95,
  "&:hover": {
    color: "white",
  },
});

const developers = [
  { name: "@victoryalhj", url: "https://github.com/victoryalhj" },
  { name: "@hyun-june", url: "https://github.com/hyun-june" },
  { name: "@JiHyoung", url: "https://github.com/JiHyoung" },
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
  return (
    <FooterContainer>
      <Box>
        <Typography color="white">Logo</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 5 }}>
        <InfoBox
          href="https://github.com/hyun-june/react-study4-team5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="small" />
          <Typography color="white">Project GitHub</Typography>
        </InfoBox>
        <Box>
          <Typography
            color="white"
            borderBottom={"1px solid white"}
            marginBottom={1}
          >
            Developers
          </Typography>
          <DeveloperInfo>
            {developers.map(({ name, url }) => (
              <DevelopersInfo name={name} url={url} />
            ))}
          </DeveloperInfo>
        </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
