import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const StandardGrade = () => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/img/modern-bedroom.jpg"
          height="500px"
          sx={{ objectFit: "fit" }}
        />
        <Box
          className="page-header-text-box"
          sx={{
            position: "absolute",
            top: "40%", // Adjust the vertical position as desired
            left: "50%", // Adjust the horizontal position as desired
            transform: "translate(-50%,-50%)",

            fontWeight: "700",
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            padding: "20px",
            width: "70%",
          }}
        >
          <Typography
            variant="h3"
            className="page-header-text grade_type_head_custom"
          >
            Standard Grade
          </Typography>

          <Breadcrumbs
            aria-label="breadcrumb"
            className="mt-2 d-flex justify-content-center"
          >
            <Link className="text-dark" to="/">
              <Typography
                sx={{
                  border: "1px solid #fff",
                  backgroundColor: "#ccc",
                  padding: "0px 10px",
                  borderRadius: "40px 40px",
                  fontWeight: 700,
                }}
              >
                Home
              </Typography>
            </Link>

            <Link className="text-dark" to="/pricing">
              <Typography
                sx={{
                  border: "1px solid #fff",
                  backgroundColor: "#ccc",
                  padding: "0px 10px",
                  borderRadius: "40px 40px",
                  fontWeight: 700,
                }}
              >
                Pricing
              </Typography>
            </Link>
            <Typography
              sx={{
                color: "text.primary",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  border: "1px solid #fff",
                  backgroundColor: "#ccc",
                  padding: "0px 10px",
                  borderRadius: "40px 40px",
                  fontWeight: 400,
                }}
              >
                Titanium Grade
              </Typography>
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <Container sx={{ padding: "70px 0px" }} className="price_grade_container">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 30px",
          }}
        >
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_card"
              sx={{
                minWidth: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
              }}
            >
              <CardContent
                sx={{ textAlign: "center" }}
                className="price_card_content"
              >
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Diva
                </Typography>
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br /> BWP
                  Century Club prime Ply 710 grade, 0.8 mm Greenlam/ Merino
                  Laminates, Budget Friendly price, Long Lasting, attractive
                  colours, Profile Handle, Profile glass shutter, Decorative
                  shelves, 3 types of busket with tandom racks, Branded hardware
                  fittings. Premium Look.
                </Typography>

                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No pullot, less modern fittings
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;60,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 5 years service warrenty & branded authorize warrenty
                  for hardware. Terms & Conditions apply.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_card"
              sx={{ width: "100%", padding: "30px 0px", marginBottom: "50px" }}
            >
              <CardContent
                sx={{ textAlign: "center" }}
                className="price_card_content"
              >
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Iris
                </Typography>
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br /> BWP
                  Ply 710 grade, 0.8 mm Greenlam/ Merino Laminates, Standard
                  price, More Durable, Flawless attractive colours, Profile
                  Handle, 4 types of busket, pullout, standard stainless steel
                  hardware fittings.
                </Typography>

                <br />
                <br />
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No branded fittings.
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;54,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 3 year service warrenty & 1 year warrenty for hardware.
                  Terms & Conditions apply.
                </Typography>
                <br />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_card"
              sx={{ width: "100%", padding: "30px 0px", marginBottom: "50px" }}
            >
              <CardContent
                sx={{ textAlign: "center" }}
                className="price_card_content"
              >
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Epic
                </Typography>
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br /> BWP
                  Ply 710 grade, 0.8 mm Sky Deco'r/ Advance Laminates, Lowest
                  Price, More Durable, Selected colours, Profile Handle, 3 types
                  of busket, Standard Stainless steel hardware fittings. Premium
                  Look.
                </Typography>

                <br />
                <br />
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No glass shutter, no branded fittings. Less Warrenty
                </Typography>

                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;48,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 1 year service warrenty & 6 months warrenty for
                  hardware. Terms & Conditions apply.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_card"
              sx={{ width: "100%", padding: "30px 0px", marginBottom: "50px" }}
            >
              <CardContent
                sx={{ textAlign: "center" }}
                className="price_card_content"
              >
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Cozy
                </Typography>
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br />{" "}
                  Basic, BWP Ply 303 grade, 0.8 mm Sky Deco'r / Advance
                  Laminates, Lowest price, Durable, Selected colours, Profile
                  Handle, 3 types of busket, Standard hardware fittings.
                </Typography>

                <br />
                <br />
                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No handles, no glass shutter, no branded fittings. Less
                  Warranty
                </Typography>

                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;45,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                  className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 1 year service warrenty & 6 months warrenty for
                  hardware. Terms & Conditions apply.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/pricing" className="btn_link">
            <Button size="small" variant="contained" className="grade_btn">
              back
            </Button>
          </Link>
        </CardActions>
      </Container>
    </>
  );
};

export default StandardGrade;
