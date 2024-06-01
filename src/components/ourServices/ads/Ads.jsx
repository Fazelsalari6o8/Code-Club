// components
import TopBox from "./topBox/TopBox";
import BottomBox from "./bottomBox/BottomBox";

// mui
import { Box } from "@mui/material";

function Ads() {
  return (
    <Box component="div" mt={6}>
      <TopBox />
      <BottomBox />
    </Box>
  );
}

export default Ads;
