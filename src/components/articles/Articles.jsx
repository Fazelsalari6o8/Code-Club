// Apollo
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

// sanitize
import sanitize from "sanitize-html";

// components
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";
import Title from "../shared/title/Title.jsx";
import Tags from "./tags/Tags.jsx";

// mui
import { Box, Container, Typography } from "@mui/material";

// iconsax
import { ArrowLeft, Eye } from "iconsax-react";

// utils
import { e2p } from "../../utils/replaceNumber.js";
import { getJalaliDate } from "../../utils/dateFormater.js";

// queries
import { GET_ARTICLES_INFO } from "../../graphql/queries.js";

// styles
import styles from "./Articles.module.css";
import Button from "../shared/button/Button.jsx";

function Articles() {
  const { loading, data, error } = useQuery(GET_ARTICLES_INFO);

  return (
    <Container maxWidth="lg" sx={{ mt: 8, px: 3 }}>
      <Title text="مقالات" />

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <Box
            component="div"
            mt={4}
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems={{ md: "center" }}
            gap={{ xs: "24px", lg: "40px" }}
          >
            {/* start right section */}
            <Box
              component="div"
              width={{ xs: "auto", md: "608px" }}
              height={{ xs: "330px", md: "494px" }}
              padding={{ xs: "16px", lg: "24px" }}
              borderRadius={{ xs: "16px", md: "32px" }}
              bgcolor="secondary.50"
              boxShadow={{
                xs: "0 5.03px 9.42px 0 #40d3a926",
                md: "0 8px 15px 0 #40d3a926",
              }}
            >
              <Box component="div" display="flex" justifyContent="center">
                <img
                  src={data.articles[0].cover1.url}
                  className={styles.cover1}
                  alt="cover 1"
                />
              </Box>

              <Box
                component="div"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                fontSize={{ xs: "12px", md: "14px" }}
                mt={{ xs: 2, md: 3 }}
              >
                <Box component="p" color="primary.500">
                  {getJalaliDate(data.articles[0].createDate)}
                </Box>

                <Box component="p" display="flex" alignItems="center">
                  <Eye
                    size="18"
                    color="#40d3a9"
                    style={{ marginLeft: "4px" }}
                    className={styles.eyeIcon}
                  />
                  {e2p(data.articles[0].seen)}
                </Box>
              </Box>

              <Typography
                component="h4"
                variant="h6"
                fontSize={{ xs: "16px", md: "18px" }}
                fontWeight={700}
                color="text.text5"
                mt={{ xs: 1, md: 3 }}
              >
                {data.articles[0].title}
              </Typography>

              <Typography
                component="p"
                variant="p"
                height={{ xs: "60px", md: "81px" }}
                fontSize="12px"
                color="text.text5"
                overflow="hidden"
                mt={{ xs: "6px", md: 2 }}
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.articles[0].textContent.html),
                }}
              ></Typography>

              <Box
                component="div"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop={{ xs: "12px", md: "24px" }}
                fontSize="12px"
              >
                <Box component="ul" display="flex">
                  {data.articles[0].tag.map((item, index) => (
                    <Tags item={item} key={index} />
                  ))}
                </Box>

                <Link
                  to="/"
                  style={{
                    color: "#4ca58c",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  مشاهده بیشتر
                  <ArrowLeft size="18" style={{ marginRight: "4px" }} />
                </Link>
              </Box>
            </Box>
            {/* end right section */}

            {/* start left section */}
            <Box component="div">
              {/* start left top section */}
              <Box
                component="div"
                p={{ xs: "16px", md: "16px 24px" }}
                bgcolor="secondary.50"
                borderRadius={{ xs: "16px", md: "32px" }}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                boxShadow={{
                  xs: "0 5.03px 9.42px 0 #40d3a926",
                  md: "0 8px 15px 0 #40d3a926",
                }}
              >
                <img
                  src={data.articles[1].cover1.url}
                  className={styles.cover2}
                  alt="cover 2"
                />
                <img
                  src={data.articles[1].cover2.url}
                  className={styles.cover2M}
                  alt="cover 2"
                />

                <Box component="div" mr={{ xs: 0, md: 3 }} width="100%">
                  <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "row-reverse", md: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="13px"
                    mt={{ xs: 2, md: 0 }}
                  >
                    <Box component="p" display="flex" alignItems="center">
                      <Eye
                        size="18"
                        color="#40d3a9"
                        style={{ marginLeft: "4px" }}
                      />
                      {e2p(data.articles[1].seen)}
                    </Box>

                    <Box component="p" color="primary.500">
                      {getJalaliDate(data.articles[1].createDate)}
                    </Box>
                  </Box>

                  <Typography
                    component="h4"
                    variant="h6"
                    fontSize={{ xs: "16px", md: "14px" }}
                    fontWeight={700}
                    color="text.text5"
                    mt={2}
                  >
                    {data.articles[1].title}
                  </Typography>

                  <Typography
                    component="p"
                    variant="p"
                    color="text.text5"
                    height="81px"
                    fontSize="12px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    mt={2}
                    dangerouslySetInnerHTML={{
                      __html: sanitize(data.articles[1].textContent.html),
                    }}
                  ></Typography>

                  <Box
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="12px"
                    mt={2}
                  >
                    <Box component="ul" display="flex">
                      {data.articles[1].tag.map((item, index) => (
                        <Tags item={item} key={index} />
                      ))}
                    </Box>

                    <Link
                      to="/"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "#4ca58c",
                      }}
                    >
                      مشاهده بیشتر
                      <ArrowLeft size="18" style={{ marginRight: "4px" }} />
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* end left top section */}

              {/* start left bottom section */}
              <Box
                component="div"
                p={{ xs: "16px", md: "16px 24px" }}
                mt={3}
                bgcolor="secondary.50"
                borderRadius={{ xs: "16px", md: "32px" }}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                boxShadow={{
                  xs: "0 5.03px 9.42px 0 #40d3a926",
                  md: "0 8px 15px 0 #40d3a926",
                }}
              >
                <img
                  src={data.articles[2].cover1.url}
                  className={styles.cover3}
                  alt="cover 3"
                />
                <img
                  src={data.articles[2].cover2.url}
                  className={styles.cover3M}
                  alt="cover 3"
                />

                <Box component="div" mr={{ xs: 0, md: 3 }} width="100%">
                  <Box
                    component="div"
                    display="flex"
                    flexDirection={{ xs: "row-reverse", md: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="13px"
                    mt={{ xs: 2, md: 0 }}
                  >
                    <Box component="p" display="flex" alignItems="center">
                      <Eye
                        size="18"
                        color="#40d3a9"
                        style={{ marginLeft: "4px" }}
                      />
                      {e2p(data.articles[2].seen)}
                    </Box>

                    <Box component="p" color="primary.500">
                      {getJalaliDate(data.articles[2].createDate)}
                    </Box>
                  </Box>

                  <Typography
                    component="h4"
                    variant="h6"
                    fontSize={{ xs: "16px", md: "15px" }}
                    fontWeight={700}
                    color="text.text5"
                    mt={{ xs: 1, md: 2 }}
                  >
                    {data.articles[2].title}
                  </Typography>

                  <Typography
                    component="p"
                    variant="p"
                    color="text.text5"
                    height={{ xs: "60px", md: "81px" }}
                    fontSize="12px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    mt={{ xs: "6px", md: 2 }}
                    dangerouslySetInnerHTML={{
                      __html: sanitize(data.articles[2].textContent.html),
                    }}
                  ></Typography>

                  <Box
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="12px"
                    mt={{ xs: "12px", md: 2 }}
                  >
                    <Box component="ul" display="flex">
                      {data.articles[2].tag.map((item, index) => (
                        <Tags item={item} key={index} />
                      ))}
                    </Box>

                    <Link
                      to="/"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "#4ca58c",
                      }}
                    >
                      مشاهده بیشتر
                      <ArrowLeft size="18" style={{ marginRight: "4px" }} />
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* end left bottom section */}
            </Box>
            {/* end left section */}
          </Box>
        )
      )}

      <Box component="div" mt={{ xs: 2, md: 4 }} textAlign="center">
        <Button text="مشاهده همه" link="articles" />
      </Box>
    </Container>
  );
}

export default Articles;
