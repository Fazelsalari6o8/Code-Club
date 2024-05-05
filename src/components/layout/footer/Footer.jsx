// components
import FooterSections from "./FooterSections";

// mui
import { Box, Container, Grid, Typography } from "@mui/material";

// styles
import styles from "./Footer.module.css";
import { Heart } from "iconsax-react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container
        maxWidth="lg"
        sx={{
          padding: { xs: "100px 24px 32px", md: "127px 32px 32px" },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} mb={4}>
            <FooterSections sectionTitle="عضویت در خبرنامه" />
            <Typography component="p" variant="p" fontSize="1rem" mt={0.5}>
              با عضویت در خبرنامه، از تخفیف ها، جشنواره ها و آخرین دوره ها زودتر
              از همه باخبر شوید.
            </Typography>
            <Box component="div">
              <input
                type="email"
                placeholder="ایمیل"
                className={styles.inputEmail}
              />
              <button className={styles.buttonEmail}>ارسال</button>
            </Box>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FooterSections
              sectionTitle="بخش های سایت"
              items={[
                { name: "دوره ها", link: "/courses" },
                { name: "درباره ما", link: "/about-us" },
                { name: "نظرات", link: "/comments" },
                { name: "بلاگ", link: "/articles" },
              ]}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FooterSections
              sectionTitle="دوره های آموزشی"
              items={[
                { name: "دوره جامع انگولار", link: "/courses/angular" },
                { name: "دوره جامع ری‌اکت", link: "/courses/reactjs" },
                { name: "دوره جامع پایتون", link: "/courses/python" },
                { name: "دوره جامع فلاتر", link: "/courses/flutter" },
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <FooterSections
              sectionTitle="شبکه های اجتماعی"
              items={[
                { name: "اینستاگرام", link: "#" },
                { name: "تلگرام", link: "#" },
                { name: "لینکدین", link: "#" },
                { name: "یوتیوب", link: "#" },
              ]}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              component="p"
              variant="p"
              fontSize="0.95rem"
              height={3}
              mt={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              طراحی شده با{" "}
              <Heart
                variant="Bold"
                size="24"
                color="#1a5444"
                style={{ margin: "0 12px 5px" }}
              />{" "}
              توسط فاطمه غفاری
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
