// mui
import { Box, Typography } from "@mui/material";

// utils
import { e2p } from "../../../utils/replaceNumber.js";
import { getJalaliDate2 } from "../../../utils/dateFormater.js";

// iconsax
import { Add, Minus } from "iconsax-react";

// images
import star from "../../../assets/images/star.svg";

function CmCardEl({ comment }) {
  return (
    <Box
      component="div"
      width="364px"
      height="340px"
      boxShadow="0 12px 20px 0 #40d3a926"
      borderRadius="16px"
      p={2}
    >
      {/* start top section */}
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box component="div" display="flex" alignItems="center">
          <img
            src={comment.avatar.url}
            alt="avatar"
            width="60px"
            height="60px"
          />

          <Box component="div" mr={1}>
            <Typography
              component="p"
              variant="p"
              fontSize="16px"
              color="primary.800"
            >
              {comment.name}
            </Typography>

            <Typography
              component="p"
              variant="p"
              fontSize="12px"
              mt="4px"
              color="text.text2"
            >
              دوره جامع{" "}
              {comment.course?.title ? comment.course.title : "پایتون"}
            </Typography>
          </Box>
        </Box>

        <Box component="div">
          <Typography
            component="p"
            variant="p"
            fontSize="12px"
            color="text.text2"
          >
            {e2p(getJalaliDate2(comment.createDate))}
          </Typography>

          <Typography
            component="p"
            variant="p"
            fontSize="12px"
            color="text.text5"
            display="flex"
            alignItems="center"
            mt="6px"
          >
            <img src={star} alt="star" style={{ marginLeft: "4px" }} />
            {e2p(comment.rating + " از 5")}
          </Typography>
        </Box>
      </Box>
      {/* end top section */}

      {/* start bottom section */}
      <Box component="div" mt={2}>
        <Typography
          height="90px"
          overflow="hidden"
          //   whiteSpace="nowrap"
          //   textOverflow="ellipsis"
          fontSize="14.5px"
          color="text.text5"
        >
          {comment.text}
        </Typography>

        <Box component="div" mt={2}>
          <Box component="div">
            {comment.positivePoint.map((item, index) => (
              <Typography
                component="p"
                variant="p"
                fontSize="11px"
                color="text.text5"
                display="flex"
                alignItems="center"
                mb="6px"
                key={index}
              >
                <Add size="18" color="#00c073" style={{ marginLeft: "4px" }} />{" "}
                {item}
              </Typography>
            ))}
          </Box>

          <Box component="div" mt="12px">
            {comment.negativePoint.length > 0 ? (
              comment.negativePoint.map((item, index) => (
                <Typography
                  component="p"
                  variant="p"
                  fontSize="11px"
                  color="text.text5"
                  display="flex"
                  alignItems="center"
                  mb="6px"
                  key={index}
                >
                  <Minus
                    size="18"
                    color="#e23c3c"
                    style={{ marginLeft: "4px" }}
                  />
                  {item}
                </Typography>
              ))
            ) : (
              <Typography
                component="p"
                variant="p"
                fontSize="12px"
                color="text.text5"
                display="flex"
                alignItems="center"
              >
                <Minus
                  size="18"
                  color="#e23c3c"
                  style={{ marginLeft: "4px" }}
                />
                ندارد
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      {/* end bottom section */}
    </Box>
  );
}

export default CmCardEl;
