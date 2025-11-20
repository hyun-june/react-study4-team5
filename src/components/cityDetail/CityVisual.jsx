import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Container, Typography, ImageList, ImageListItem, Box } from "@mui/material";

const Wrapper = styled(Container)({
    width: "100%",
    height: 300,
    marginTop: "100px",
});

const VisualImage = styled(CardMedia)({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 32,
    position: "relative",
    overflow: "hidden",
});

const CityVisual = ({ photos = [], keyword }) => {
    const heroPhoto = photos[0];

    if (!heroPhoto) {
        return (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                표시할 이미지가 없습니다.
            </Typography>
        );
    }

    return (
        <Wrapper>
            <VisualImage component="img" image={heroPhoto.src.medium} alt={heroPhoto.alt ?? `${keyword} 대표 이미지`} />
        </Wrapper>
    );
};

export default CityVisual;
