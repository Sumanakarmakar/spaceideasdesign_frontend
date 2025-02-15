import { Box, Breadcrumbs, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ServicePart from "../Components/ServicePart";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Services = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
            Services
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
                Services
              </Typography>
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <ServicePart/>

      <div className="container-fluid gallery_container common-sec-gap">
        <div className="text-center">
          <h2 className="mb-5">Our Gallery</h2>
          {/* <p>Some designs to show</p> */}
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div class="card">
                <img
                  src="/img\gallery\Economy Advance G-9118MG.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Series Model 2011.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Series Model 2012.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Sky Decor G-2021.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Sky Decor G-2023 tray.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Sky Decor G-2025 .png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Sky Decor G-2026 .png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\Economy Sky Decor G-2028.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div>
              <div class="card">
                <img
                  src="\img\gallery\ktc 2.png"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
