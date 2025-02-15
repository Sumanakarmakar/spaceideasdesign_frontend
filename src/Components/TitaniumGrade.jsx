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

const TitaniumGrade = () => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/img/foyer-designs.jpg"
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
            Titanium Grade
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

      <Container
        sx={{ padding: "70px 0px", display: "flex", justifyContent: "center" }}
        className="price_grade_container"
      >
        <Card
          className="price_card"
          sx={{ width: "60%", padding: "30px 50px", marginBottom: "50px" }}
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
              Slavia
            </Typography>
            <br />
            <br />

            <Typography
              className="price_para"
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 17 }}
            >
              <span className="price_grade_para">Features:</span> <br /> BWP
              Century Club prime Ply 710 grade, 2.5 Acrylic Neoshine/Zenex/ PVC
              Laminates, Premium Budget, Long Durable, attractive colours,
              Profile Handle, Profile glass shutter, Decorative shelves, 4 types
              of busket with tandom racks, Branded Stainless steel hardware
              fittings. Premium Look.
            </Typography>

            <br />
            <br />

            <Typography
              className="price_para"
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 17 }}
            >
              <span className="price_grade_para">Price Range:</span>
              <br /> Approximately &#8377;1,20,000/- for 30 SQFT
            </Typography>

            <br />
            <br />

            <Typography
              className="price_para"
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 17 }}
            >
              <span className="price_grade_para">Warrenty:</span>
              <br /> 10 year service warrenty & brands provide warrenty for
              hardware. Terms & Conditions apply.
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container className="titaniumback_container">
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/pricing" className="btn_link">
            <Button
              size="small"
              variant="contained"
              className="titaniumback_btn"
            >
              Back
            </Button>
          </Link>
        </CardActions>
      </Container>
    </>
  );
};

export default TitaniumGrade;
