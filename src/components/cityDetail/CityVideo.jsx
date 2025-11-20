import { styled } from "@mui/material/styles";
import { Typography, Card, CardMedia, CardContent, Container } from "@mui/material";

const Wrapper = styled(Container)({
    padding: "100px 0 32px",
    width: "100%",
});

const CityVideo = ({ keyword, mainVideo }) => (
    <Wrapper>
        <Typography variant="h5" sx={{ mb: 2 }}>
            {keyword}의 생생한 현장을 확인하세요!
        </Typography>

        {mainVideo ? (
            <Card
                sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#000",
                }}
            >
                <CardMedia
                    component="video"
                    controls
                    src={
                        mainVideo.video_files.find((file) => file.quality === "sd")?.link ??
                        mainVideo.video_files[0]?.link
                    }
                />
                <CardContent sx={{ py: 1.5, px: 2, backgroundColor: "#111" }}>
                    <Typography variant="body2" color="#eee">
                        {mainVideo.user.name}
                    </Typography>
                </CardContent>
            </Card>
        ) : (
            <Typography variant="body2">표시할 비디오가 없습니다.</Typography>
        )}
    </Wrapper>
);

export default CityVideo;
