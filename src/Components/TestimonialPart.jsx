import React from "react";
import Slider from "react-slick";

const TestimonialPart = () => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="container-fluid gallery_container common-sec-gap">
        <div className="text-center">
          <h2 className="mb-5">Clients Review</h2>
          {/* <p>Some designs to show</p> */}
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Subhamoy Adak</h5>
                  <p class="card-text">
                    Very much satisfied to work with this organisation. I am
                    giving 5 star to Space Idea's Design Studio. They fulfilled
                    my all requirements and I am so much grateful for this.
                    Thank You.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Tripti Mitra, Housewife</h5>
                  <p class="card-text">
                    Thank you Space Idea's Design studio for decorating my
                    kitchen as well as I said. Your decoration for my small
                    kitchen is definately recommendable. Thank you for
                    fulfilling my dreams.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialPart;
