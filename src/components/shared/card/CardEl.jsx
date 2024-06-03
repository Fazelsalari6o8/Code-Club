// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Box, Typography } from "@mui/material";

// components
import Button from "../button/Button.jsx";

// iconsax
import { ArrowLeft, Microphone2, People, Timer1 } from "iconsax-react";

// utils
import { e2p, sp } from "../../../utils/replaceNumber.js";

// image
import bgCourseIcon from "../../../assets/images/bg-course-icon.svg";

function CardEl({
  course: { title, price, students, time, courseStatus, slug, image },
}) {
  return (
    <>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        position="relative"
      >
        <img
          src={bgCourseIcon}
          alt="bg-icon"
          style={{
            position: "absolute",
            top: "-16px",
            left: "-16px",
            borderTopLeftRadius: "16px",
          }}
        />
        <Box component="div" display="flex" flexDirection="column">
          <Typography
            component="p"
            variant="p"
            bgcolor="primary.100"
            width="fit-content"
            mb="12px"
            display="flex"
            alignItems="center"
            borderRadius="20px"
            p="4px 8px"
          >
            <People size="24" color="#40d3a9" style={{ marginLeft: "6px" }} />
            {e2p(students)}
          </Typography>
          <Typography
            component="p"
            variant="p"
            bgcolor="primary.100"
            width="fit-content"
            mb="12px"
            display="flex"
            alignItems="center"
            borderRadius="20px"
            p="4px 8px"
          >
            <Timer1 size="24" color="#40d3a9" style={{ marginLeft: "6px" }} />
            {e2p(time)} ساعت
          </Typography>
          {courseStatus ? (
            <Typography
              component="p"
              variant="p"
              bgcolor="primary.100"
              width="fit-content"
              mb="12px"
              display="flex"
              alignItems="center"
              borderRadius="20px"
              p="4px 8px"
            >
              <Microphone2
                size="24"
                color="#40d3a9"
                style={{ marginLeft: "6px" }}
              />
              اتمام ضبط
            </Typography>
          ) : (
            <Typography
              component="p"
              variant="p"
              bgcolor="primary.100"
              width="fit-content"
              mb="12px"
              display="flex"
              alignItems="center"
              borderRadius="20px"
              p="4px 8px"
            >
              <Microphone2
                size="24"
                color="#40d3a9"
                style={{ marginLeft: "6px" }}
              />
              درحال ضبط
            </Typography>
          )}
        </Box>

        <Box component="div" zIndex="1">
          <img src={image.url} alt={title} />
        </Box>
      </Box>

      <Typography
        component="p"
        variant="p"
        textAlign="right"
        m="26px 0 12px"
        fontSize="1.1rem"
        fontWeight={700}
      >
        دوره جامع {title}
      </Typography>

      <Box
        component="div"
        mt="12px"
        display="flex"
        justifyContent="space-between"
      >
        <Button text="ثبت نام" fontWeight={700} />

        <Box component="div" textAlign="right">
          <Typography
            component="p"
            variant="p"
            fontSize="1.1rem"
            fontWeight={700}
          >
            {sp(price)} تومان
          </Typography>
          <Link
            to={`/courses/${slug}`}
            style={{
              textDecoration: "none",
              color: "#4ca58c",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            مشاهده بیشتر <ArrowLeft size="18" style={{ marginRight: "4px" }} />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default CardEl;
