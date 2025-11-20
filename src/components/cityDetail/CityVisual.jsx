import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Container, Typography, ImageList, ImageListItem, Box } from "@mui/material";

const Wrapper = styled("div")({
    width: "100vw",
    height: 420,
});

const VisualImage = styled(CardMedia)({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "relative",
    overflow: "hidden",
    padding: 0,
    margin: 0,
});

const CityVisual = ({ photos = [], keyword }) => {
    const heroPhoto = photos[2];

    if (!heroPhoto) {
        return <Typography>표시할 이미지가 없습니다.</Typography>;
    }

    return (
        <Wrapper>
            <VisualImage component="img" image={heroPhoto.src.medium} alt={heroPhoto.alt ?? `${keyword} 대표 이미지`} />
        </Wrapper>
    );
};

export default CityVisual;
