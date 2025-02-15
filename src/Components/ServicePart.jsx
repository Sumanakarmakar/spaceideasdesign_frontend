import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ServicePart = () => {
  return (
    <>
      <Box className="common-sec-gap" sx={{ backgroundColor: "#e1dada" }}>
        <Container className="service_container">
          <Typography variant="h4" className="service_head">
            Our Services
          </Typography>

          <Typography variant="body1" className="text-center">
            We provide services like your decorative soul want
          </Typography>
        </Container>

        <Container className="service_container">
          <Grid container className="service_row">
            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia component="img" image="/img/modular-kitechen.jpg" />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Modular Kitchen
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/bedroom(2).jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Bedroom
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/kids-bedroom.jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Kid's Bedroom
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/living_room.jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Living Room
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/balcony(2).jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Balcony Area
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/foyer_area.jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Foyer Area
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/pooja-unit.png"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Pooja Unit
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
              <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/wall-decoration.jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    Wall Decoration
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid xs={12} sm={4}>
              <Card className="service_card">
                <Box className="image_wrap">
                <CardMedia
                  component="img"
                  image="/img/false_ceiling.jpg"
                  height={250}
                />
                </Box>
                <CardActionArea className="text-center pt-3 pb-3">
                  <Typography variant="h5" className="service_name">
                    False Ceiling
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServicePart;
