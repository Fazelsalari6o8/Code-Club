// mui
import { Typography } from "@mui/material";

function Title({ text, textAlign }) {
  return (
    <Typography
      component="h3"
      variant="h3"
      fontSize={{ xs: "20px", lg: "24px" }}
      fontWeight={700}
      color="primary.800"
      width="100%"
      textAlign={textAlign ? textAlign : "center"}
    >
      {text ? text : "عنوان"}
    </Typography>
  );
}

export default Title;
