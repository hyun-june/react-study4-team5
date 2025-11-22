import { useState, useMemo, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Pagination,
  CircularProgress,
} from "@mui/material";
import TravelCard from "../components/TravelCard";
import { cityData } from "../constants/cityData";
import { useGetCities } from "../hooks/useGetCities";

const Cities = () => {
  const filterCityData = [...new Set(cityData)];

  const ITEMS_PER_PAGE = 20;
  const TOTAL_ITEMS = filterCityData.length;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filterCityData.slice(startIndex, endIndex);
  }, [currentPage]);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(currentItems);
  }, [currentItems]);

  const data = useGetCities(cities);

  const isLoading = data.some((item) => item.isLoading);

  if (isLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        margin={"100px auto"}
      >
        <CircularProgress sx={{ color: "#90cb47ff" }} />
        <Typography>컨텐츠 불러오는 중...</Typography>
      </Box>
    );
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3, marginTop: "5rem" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 4, mt: 3, fontWeight: 700 }}
      >
        인기 도시 투어
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <TravelCard data={data?.data} />
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
