import { Box } from "@mui/material";
import TravelCard from "./TravelCard";
import Carousel from "react-multi-carousel";
import { useGetCities } from "../hooks/useGetCities";
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

const cityList = [
  "France",
  "Japan",
  "Brazil",
  "USA",
  "Italy",
  "Spain",
  "Thailand",
  "Canada",
];

const CitySlide = () => {
  const data = useGetCities(cityList);

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
        {data?.map((data, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <TravelCard data={data?.data} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CitySlide;
