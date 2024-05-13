import { Container, Typography } from "@mui/material";

function Error({ error }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography component="h4" variant="h4" fontSize="1.2rem">
        An error occured! {error.message}
      </Typography>
    </Container>
  );
}

export default Error;
