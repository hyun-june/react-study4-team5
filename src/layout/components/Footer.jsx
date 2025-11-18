import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";

const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: 20,
  paddingInline: 40,
  backgroundColor: "black",
});

const InfoBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
});

const Footer = () => {
  return (
    <FooterContainer>
      <Box>
        <Typography color="white">Logo</Typography>
      </Box>
      <InfoBox
        component="a"
        href="https://github.com/hyun-june/react-study4-team5"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <GitHubIcon fontSize="small" sx={{ color: "white" }} />
        <Typography color="white" fontSize={"14px"}>
          Project GitHub
        </Typography>
      </InfoBox>
    </FooterContainer>
  );
};

export default Footer;
