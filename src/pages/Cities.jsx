import React, { useState, useMemo } from "react";
import { Box, Typography, Grid, Pagination } from "@mui/material";
import TravelCard from "../components/TravelCard";

const cityData = [
  { country: "France", city: "Paris" },
  { country: "Japan", city: "Tokyo" },
  { country: "Brazil", city: "Rio de Janeiro" },
  { country: "USA", city: "New York" },
  { country: "Italy", city: "Rome" },
  { country: "Spain", city: "Barcelona" },
  { country: "Thailand", city: "Bangkok" },
  { country: "Canada", city: "Vancouver" },
  { country: "Germany", city: "Berlin" },
  { country: "Australia", city: "Sydney" },
  { country: "China", city: "Shanghai" },
  { country: "UAE", city: "Dubai" },
  { country: "UK", city: "London" },
  { country: "Portugal", city: "Lisbon" },
  { country: "Mexico", city: "Mexico City" },
  { country: "Netherlands", city: "Amsterdam" },
  { country: "South Korea", city: "Seoul" },
  { country: "Egypt", city: "Cairo" },
  { country: "Russia", city: "Moscow" },
  { country: "Argentina", city: "Buenos Aires" },
  { country: "Turkey", city: "Istanbul" },
  { country: "Austria", city: "Vienna" },
  { country: "Greece", city: "Athens" },
  { country: "Ireland", city: "Dublin" },
  { country: "India", city: "Mumbai" },
  { country: "South Africa", city: "Cape Town" },
  { country: "Peru", city: "Lima" },
  { country: "Chile", city: "Santiago" },
  { country: "Colombia", city: "Bogota" },
  { country: "Vietnam", city: "Hanoi" },
  { country: "Malaysia", city: "Kuala Lumpur" },
  { country: "Indonesia", city: "Jakarta" },
  { country: "Philippines", city: "Manila" },
  { country: "Saudi Arabia", city: "Riyadh" },
  { country: "Israel", city: "Tel Aviv" },
  { country: "Sweden", city: "Stockholm" },
  { country: "Norway", city: "Oslo" },
  { country: "Denmark", city: "Copenhagen" },
  { country: "Finland", city: "Helsinki" },
  { country: "Czech Republic", city: "Prague" },
  { country: "Hungary", city: "Budapest" },
  { country: "Poland", city: "Warsaw" },
  { country: "Belgium", city: "Brussels" },
  { country: "Switzerland", city: "Zurich" },
  { country: "New Zealand", city: "Auckland" },
  { country: "Cuba", city: "Havana" },
  { country: "Morocco", city: "Marrakech" },
  { country: "Kenya", city: "Nairobi" },
  { country: "Nigeria", city: "Lagos" },
  { country: "Ghana", city: "Accra" },
  { country: "Jordan", city: "Amman" },
  { country: "Lebanon", city: "Beirut" },
  { country: "Iran", city: "Tehran" },
  { country: "Iraq", city: "Baghdad" },
  { country: "Pakistan", city: "Karachi" },
  { country: "Bangladesh", city: "Dhaka" },
  { country: "Myanmar", city: "Yangon" },
  { country: "Cambodia", city: "Phnom Penh" },
  { country: "Laos", city: "Vientiane" },
  { country: "Taiwan", city: "Taipei" },
  { country: "South Korea", city: "Busan" },
  { country: "USA", city: "Los Angeles" },
  { country: "USA", city: "Chicago" },
  { country: "USA", city: "Miami" },
  { country: "USA", city: "Seattle" },
  { country: "Canada", city: "Toronto" },
  { country: "Canada", city: "Montreal" },
  { country: "UK", city: "Edinburgh" },
  { country: "UK", city: "Manchester" },
  { country: "Germany", city: "Munich" },
  { country: "Germany", city: "Frankfurt" },
  { country: "Italy", city: "Milan" },
  { country: "Italy", city: "Florence" },
  { country: "Spain", city: "Madrid" },
  { country: "Spain", city: "Seville" },
  { country: "France", city: "Marseille" },
  { country: "France", city: "Lyon" },
  { country: "Brazil", city: "Sao Paulo" },
  { country: "Argentina", city: "Cordoba" },
  { country: "Colombia", city: "Medellin" },
  { country: "Mexico", city: "Guadalajara" },
  { country: "Peru", city: "Cusco" },
  { country: "Chile", city: "Valparaiso" },
  { country: "China", city: "Beijing" },
  { country: "China", city: "Guangzhou" },
  { country: "Japan", city: "Osaka" },
  { country: "Japan", city: "Kyoto" },
  { country: "India", city: "Delhi" },
  { country: "India", city: "Bangalore" },
  { country: "Australia", city: "Melbourne" },
  { country: "Australia", city: "Perth" },
  { country: "South Africa", city: "Johannesburg" },
  { country: "Egypt", city: "Giza" },
  { country: "Russia", city: "Saint Petersburg" },
  { country: "Greece", city: "Thessaloniki" },
  { country: "Austria", city: "Salzburg" },
  { country: "Switzerland", city: "Geneva" },
  { country: "New Zealand", city: "Wellington" },
  { country: "Vietnam", city: "Ho Chi Minh City" },
  { country: "Thailand", city: "Phuket" },
];

const ITEMS_PER_PAGE = 20;
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
    <Box sx={{ flexGrow: 1, padding: 3, marginTop: '3rem' }}>
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
