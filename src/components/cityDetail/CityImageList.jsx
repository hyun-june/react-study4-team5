import { styled } from "@mui/material/styles";
import { Container, Typography, ImageList, ImageListItem } from "@mui/material";

const Wrapper = styled("section")({
    margin: "100px 0 32px",
    width: "100%",
});

const srcset = (image, size, rows = 1, cols = 1) => {
    const width = size * cols;
    const height = size * rows;
    return {
        src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`,
    };
};

const CityImageList = ({ keyword, photos = [] }) => (
    <Wrapper>
        <Typography variant="h5" sx={{ mb: 2 }}>
            한 눈에 보는 {keyword}!
        </Typography>
        <ImageList sx={{ width: "100%", height: "100%" }} variant="quilted" cols={3} rowHeight={120}>
            {photos.map((photo, index) => {
                const sizes = [
                    { cols: 3, rows: 1 },
                    { cols: 2, rows: 1 },
                    { cols: 1, rows: 3 },
                    { cols: 2, rows: 2 },
                ];
                const { cols, rows } = sizes[index % sizes.length];

                return (
                    <ImageListItem key={photo.id} cols={cols} rows={rows}>
                        <img {...srcset(photo.src.medium, 120, rows, cols)} alt={photo.alt} loading="lazy" />
                        {/* <Typography color="text.secondary">{photo.alt}</Typography> */}
                    </ImageListItem>
                );
            })}
        </ImageList>
    </Wrapper>
);

export default CityImageList;
