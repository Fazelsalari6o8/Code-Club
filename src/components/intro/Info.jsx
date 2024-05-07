// mui
import { Box, Grid, Typography } from "@mui/material";

function Info() {
  return (
    <Box component="div" display={"flex"} justifyContent={"center"}>
      <Grid
        container
        xs={12}
        md={10}
        lg={8}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(30px)",
          borderRadius: "16px",
          padding: "32px",
          marginTop: { xs: "10px", sm: "0" },
        }}
      >
        <Grid item xs={6} sm={12} mb={4} textAlign={"center"}>
          <Typography component="p" variant="p" color="primary.200">
            ۲۲۰
          </Typography>
          <Typography component="p" variant="p" color="primary.400">
            مدرس
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12} mb={4} textAlign={"center"}>
          <Typography component="p" variant="p" color="primary.200">
            ۱۲,۵۲۴
          </Typography>
          <Typography component="p" variant="p" color="primary.400">
            دانشجو
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12} mb={{ xs: "0", sm: 4 }} textAlign={"center"}>
          <Typography component="p" variant="p" color="primary.200">
            ۳۶۰,۰۰۰
          </Typography>
          <Typography component="p" variant="p" color="primary.400">
            ساعت آموزش
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12} textAlign={"center"}>
          <Typography component="p" variant="p" color="primary.200">
            ۳۶۰,۰۰۰
          </Typography>
          <Typography component="p" variant="p" color="primary.400">
            دوره آموزشی
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Info;
