// mui
import { Container } from "@mui/material";

// react-loader-spinner
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TailSpin
        height="100"
        width="100"
        color="#40d3a9"
        ariaLabel="tail-spin-loading"
      />
    </Container>
  );
}

export default Loader;
