import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CitySlide from "../CitySlide";

const Wrapper = styled("section")({
    margin: "100px 0 32px",
    width: "100%",
});

const CityMore = () => {
    return (
        <Wrapper>
            <Typography
                component={"h2"}
                fontWeight={600}
                fontSize={"1.8rem"}
                width={"100%"}
                borderBottom="2px solid #e9e9e9"
                sx={{ mb: 3, pb: 1 }}
            >
                여행지 더 알아보기
            </Typography>
            <CitySlide />
        </Wrapper>
    );
};

export default CityMore;
