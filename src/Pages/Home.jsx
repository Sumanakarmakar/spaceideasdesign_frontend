import React from "react";
import AboutPart from "../Components/AboutPart";
import ServicePart from "../Components/ServicePart";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TestimonialPart from "../Components/TestimonialPart";

const Home = () => {
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
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item banner_content active">
            <img
              src="/img/banner-1.jpg"
              class="d-block w-100"
              alt="banner-1"
              height={650}
            />
            <div class="carousel-caption">
              <AnimationOnScroll
                animateIn="animate__bounceIn"
                initiallyVisible="true"
              >
                <h5 className="banner_head" data-aos="fade-down">
                  Space Idea's Design Studio
                </h5>
              </AnimationOnScroll>
              <p className="banner_para" data-aos="fade-right">
                Let your home be unique and decorative
              </p>
            </div>
          </div>
          <div class="carousel-item banner_content">
            <img
              src="/img/banner-2.jpeg"
              class="d-block w-100"
              alt="banner-2"
              height={650}
            />
            <div class="carousel-caption">
              {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
              <h5 className="banner_head" data-aos="fade-down">
                Space Idea's Design Studio
              </h5>
              {/* </AnimationOnScroll> */}
              <p className="banner_para" data-aos="fade-right">
                Wherever life plants you, bloom with decor!
              </p>
            </div>
          </div>
          <div class="carousel-item banner_content">
            <img
              src="/img/banner-3.jpg"
              class="d-block w-100"
              alt="banner-3"
              height={650}
            />
            <div class="carousel-caption">
              <h5 className="banner_head" data-aos="fade-down">
                Space Idea's Design Studio
              </h5>
              <p className="banner_para" data-aos="fade-right">
                We are natural projection of your soul
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>

      <AboutPart />

      <ServicePart />

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

      <TestimonialPart/>
    </>
  );
};

export default Home;
