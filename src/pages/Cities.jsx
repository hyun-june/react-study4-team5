import React, { useState, useMemo } from "react";
import { Box, Typography, Grid, Pagination } from "@mui/material";
import TravelCard from "../components/TravelCard";
import { cityData } from "../constants/cityData";

const ITEMS_PER_PAGE = 16;
const TOTAL_ITEMS = cityData.length;

const Cities = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return cityData.slice(startIndex, endIndex);
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 3, marginTop: "3rem" }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4, mt: 3, fontWeight: 700 }}>
                인기 도시 투어
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {currentItems.map((data, index) => (
                    <Grid
                        item
                        key={data.city}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <TravelCard countryName={data.country} cityName={data.city} />
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 5,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                />
            </Box>
        </Box>
    );
};

export default Cities;
