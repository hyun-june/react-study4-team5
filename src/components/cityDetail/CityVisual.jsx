import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import { Container, Typography, ImageList, ImageListItem, Box } from "@mui/material";

const Wrapper = styled("div")({
    position: "relative",
    width: "100vw",
    height: 420,
});

const VisualImage = styled(CardMedia)({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

const Overlay = styled("div")({
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
    zIndex: 0,
});

const Text = styled("p")({
    fontFamily: "Pretendard",
    fontSize: "4rem",
    fontWeight: "800",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
});

const CityVisual = ({ photos = [], keyword }) => {
    const heroPhoto = photos[2];

    if (!heroPhoto) {
        return <Typography>표시할 이미지가 없습니다.</Typography>;
    }

    return (
        <Wrapper>
            <VisualImage component="img" image={heroPhoto.src.medium} alt={heroPhoto.alt ?? `${keyword} 대표 이미지`} />
            <Overlay />
            <Text>{keyword}</Text>
        </Wrapper>
    );
};

export default CityVisual;
