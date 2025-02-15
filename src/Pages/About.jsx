import { Box, Breadcrumbs, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import AboutPart from "../Components/AboutPart";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/img/banner-3.jpg"
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
            color: "rgba(248, 245, 245, 0)",
            padding: "20px",
            width: "70%",
          }}
        >
          <Typography
            variant="h3"
            className="page-header-text about_text_custom"
          >
            About Us
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
                About
              </Typography>
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <AboutPart />
    </>
  );
};

export default About;
