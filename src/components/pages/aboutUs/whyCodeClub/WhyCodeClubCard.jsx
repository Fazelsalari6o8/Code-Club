// mui
import { Box, Typography } from "@mui/material";

// images
import vector from "../../../../assets/images/aboutUsImages/Vector.svg";

function WhyCodeClubCard({ title, text, id }) {
  return (
    <Box
      component="div"
      mt={{ md: id % 2 !== 0 && "43px" }}
      mb={{ xs: 3, md: 0 }}
      display="flex"
      alignItems={"center"}
      position="relative"
      width="269px"
      height="239.11px"
    >
      <img
        src={vector}
        alt="bgpic"
        style={{ position: "absolute", top: "0", left: "0", zIndex: "-1" }}
      />
      <Box component="div">
        <Typography
          component="p"
          variant="p"
          fontSize="18px"
          fontWeight={700}
          color="text.text0"
          textAlign="center"
        >
          {title}
        </Typography>

        <Typography
          component="p"
          variant="p"
          fontSize="13.5px"
          color="primary.800"
          textAlign="center"
          mt={1}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default WhyCodeClubCard;
