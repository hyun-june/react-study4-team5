import { Box, Skeleton, Typography } from "@mui/material";
import CurrencyConverter from "../components/CurrencyConverter";
import { useGetImagesQuery } from "../hooks/useGetImages";
import { homeCities } from "../constants/homeCities";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CitySlide from "../components/CitySlide";

const RandomCityTitle = styled(Typography)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "clamp(3rem, 6vw, 8rem)",
    letterSpacing: "clamp(-2px, 6vw, -3px)",
    fontFamily: "ZenSerif",
    textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
    whiteSpace: "nowrap",
});

const Home = () => {
    const [randomCity, setRandomCity] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * homeCities.length);
        setRandomCity(homeCities[randomIndex]);
    }, []);

    const { data: images, isLoading } = useGetImagesQuery(randomCity?.name, {
        per_page: 3,
    });

    const imageUrl = images?.photos?.[0]?.src.landscape;

    return (
        <Box sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                {!isLoading && randomCity ? (
                    <Box>
                        <Box
                            component="img"
                            src={imageUrl}
                            sx={{
                                width: "100%",
                                height: { xs: "500px", sm: "600px", md: "700px" },
                                objectFit: "cover",
                            }}
                        />

                        <RandomCityTitle>{randomCity?.name}</RandomCityTitle>
                    </Box>
                ) : (
                    <Skeleton animation="wave" variant="rectangular" height={480} />
                )}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "200px",
                        background: "linear-gradient(to bottom, transparent, #ffffff)",
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 4,
                    mt: 4,
                }}
            >
                <Typography variant="h4" component="h2" sx={{ mb: 4, mt: 3, fontWeight: 700 }}>
                    인기 도시 투어
                </Typography>
            </Box>
            <CitySlide />
            <CurrencyConverter />
        </Box>
    );
};

export default Home;