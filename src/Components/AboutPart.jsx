import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutPart = () => {
  return (
    <>
      <Container className="about_container common-sec-gap">
        <Grid container>
          <Grid xs={12} sm={6} className="about_text">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              initiallyVisible="true"
            >
              <Typography variant="h4" className="about_head">
                About Us
              </Typography>
              <Typography variant="body1" className="about_para">
                This is best defined as a comprehensive service that includes
                in-person design, purchasing, project management and
                installation. The interior designer handles the entire project,
                from initial concept to finishing touches, whether it's new
                construction, renovation or remodeling.
              </Typography>
            </AnimationOnScroll>
          </Grid>
          <Grid xs={12} sm={6}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <CardMedia
                component="img"
                image="/img/aboutus.jpg"
                height={500}
              />
            </AnimationOnScroll>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          initiallyVisible="true"
        >
          <Typography variant="h4" className="about_reason">
            <em>Some reasons for choosing us: </em>
          </Typography>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__zoomIn">
          <Box className="about_reasonlist_box d-flex align-items-center">
            <Grid container className="align-items-center">
              <Grid xs={6} sm={4}>
                <div className="">
                  <img src="/img/vastu.jpg" height={150} />
                </div>
              </Grid>
              <Grid xs={6} sm={8} className="pl-3">
                <Typography variant="h4" className="about_reasonlist">
                  Vastu
                </Typography>
                <Typography variant="body1" className="mt-3">
                  Vastu Shastra is an ancient science which helps one to get the
                  natural benefits freely offered by the five basic elements of
                  the universe in which we all live. We will suggest you the
                  design of the interiors according to vastu.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box className="about_reasonlist_box">
            <Grid container>
              <Grid xs={6} sm={8} className="pr-3">
                <Typography variant="h4" className="about_reasonlist">
                  Safety Assurance
                </Typography>
                <Typography variant="body1" className="">
                  We assure your safety and guarranty the materials we provide
                </Typography>
              </Grid>
              <Grid xs={6} sm={4}>
                <div className="text-right">
                  <img src="/img/safety.png" height={150} />
                </div>
              </Grid>
            </Grid>
          </Box>
        </AnimationOnScroll>
      </Container>
    </>
  );
};

export default AboutPart;
