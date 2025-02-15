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

const Pricing = () => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/img/pricing_banner.jpg"
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
            className="page-header-text heading_text_custom"
          >
            Pricing
          </Typography>

          <Breadcrumbs aria-label="breadcrumb" className="mt-2">
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
                Pricing
              </Typography>
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <Container className="price_grade_container">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_grade_card"
              sx={{
                width: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Titanium Grade
                </Typography>

                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_para"
                >
                  It is the ultimate titanium model you can trust, explore it's
                  features by clicking the given button below
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/titanium" className="btn_link">
                  <Button
                    size="small"
                    variant="contained"
                    className="grade_btn"
                  >
                    View Types
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_grade_card"
              sx={{
                minWidth: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Premium Grade
                </Typography>

                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_para"
                >
                  It is the ultimate premium model you can trust, explore it's
                  features by clicking the given button below
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/premium" className="btn_link">
                  <Button
                    size="small"
                    variant="contained"
                    className="grade_btn"
                  >
                    View Types
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_grade_card"
              sx={{
                minWidth: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Standard Grade
                </Typography>

                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_para"
                >
                  It is the standard model you can explore it's features by
                  clicking the given button below
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/standard" className="btn_link">
                  <Button
                    size="small"
                    variant="contained"
                    className="grade_btn"
                  >
                    View Types
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              className="price_grade_card"
              sx={{
                minWidth: "100%",
                padding: "30px 0px",
                marginBottom: "50px",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_head"
                >
                  Economy Grade
                </Typography>

                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 14 }}
                  className="price_grade_para"
                >
                  It is the economy grade model you can explore it's features by
                  clicking the given button below
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/economy" className="btn_link">
                  <Button
                    size="small"
                    variant="contained"
                    className="grade_btn"
                  >
                    View Types
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Pricing;
