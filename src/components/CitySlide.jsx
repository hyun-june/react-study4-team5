import { Box } from "@mui/material";
import TravelCard from "./TravelCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const cities = [
    { country: "France", city: "Paris" },
    { country: "Japan", city: "Tokyo" },
    { country: "Brazil", city: "Rio de Janeiro" },
    { country: "USA", city: "New York" },
    { country: "Italy", city: "Rome" },
    { country: "Spain", city: "Barcelona" },
    { country: "Thailand", city: "Bangkok" },
    { country: "Canada", city: "Vancouver" },
];

const CitySlide = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {cities.map((city) => (
                    <Box key={city.city} sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                        <TravelCard countryName={city.country} cityName={city.city} />
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default CitySlide;
