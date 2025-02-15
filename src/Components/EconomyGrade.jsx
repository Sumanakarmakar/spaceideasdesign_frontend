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

const EconomyGrade = () => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/img/economy-banner.png"
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
            Economy Grade
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              className="price_card"
              sx={{
                minWidth: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
              }}
            >
              <CardContent sx={{ textAlign: "center" }} className="price_card_content">
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Arise
                </Typography>
                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br />{" "}
                  Basic, BWR Ply 303 grade, Deeptouch / Generic Laminates,
                  Lowest price, Durable, More colours, basic stainless steel
                  hardware fittings, Busket / handles & Glass shutter.
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{  fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No warrenty on hardware fittings.
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;42,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 1 year service warrenty (paid service- 5% to 10% total
                  amount of product). Terms & Conditions apply.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              className="price_card"
              sx={{ width: "100%", padding: "30px 0px", marginBottom: "50px" }}
            >
              <CardContent sx={{ textAlign: "center" }} className="price_card_content">
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Pride
                </Typography>
                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br />{" "}
                  Basic, BWR Ply 303 grade, Deeptouch / Generic Laminates,
                  Lowest price, Durable, Selected colours, Handle less, Basic
                  stainless steel hardware fittings, Glass shutter.
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No busket, no handles, no warrenty on hardware fittings.
                </Typography>

                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;36,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 1 year service warrenty (paid service- 5% to 10% total
                  amount of product). Terms & Conditions apply.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              className="price_card"
              sx={{ width: "100%", padding: "30px 0px", marginBottom: "50px" }}
            >
              <CardContent sx={{ textAlign: "center" }} className="price_card_content">
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Sleek
                </Typography>
                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Features:</span> <br />{" "}
                  Basic, BWR Ply 303 grade, Deeptouch / Generic Laminates,
                  Lowest price, Durable, Selected colours, Handle less, Basic
                  hardware fittings.
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Conditions:</span> <br />{" "}
                  No busket, no handles, no glass shutter, no warrenty on
                  hardware fittings.
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Price Range:</span>
                  <br /> Approximately &#8377;30,000/- for 30 SQFT
                </Typography>

                <br />
                <br />

                <Typography
                className="price_para"
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 17 }}
                >
                  <span className="price_grade_para">Warrenty:</span>
                  <br /> 1 year service warrenty (paid service- 5% to 10% total
                  amount of product). Terms & Conditions apply.
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

export default EconomyGrade;
