import { useMutation } from "@tanstack/react-query";
import React from "react";
import { contactPost } from "../Api/Functions/contact.api";
import Swal from "sweetalert2";
import ButtonLoader from "../Loader/ButtonLoader";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isPending, mutate } = useMutation({
    mutationFn: (data) => contactPost(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        console.log(data);
        Swal.fire({
          icon: "success",
          text: data?.message,
        });
        reset();
      }
    },
    onError: (err) => {
      console.log(err);
      reset();
    },
  });

  const onSubmitContact = (data) => {
    mutate(data);
  };
  return (
    <>
      {/* <!-- Header Start --> */}
      <div class="">
        <div
          class="d-flex flex-column justify-content-center"
          style={{ height: "300px", width: "100%", marginBottom: "90px" }}
        >
          <img src="/img/contact_banner.jpg" alt="contact" />
        </div>
      </div>
      {/* <!-- Header End --> */}

      <section id="contact" class="contact">
        <div class="container">
          <div class="row justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <div class="info-wrap">
                <div class="row">
                  <div class="col-lg-4 info">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Location:</h4>
                    <p>
                      Gopalpur Bazar
                      <br />
                      Akuni, Chanditala, Hooghly
                    </p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <h4>Email:</h4>
                    <p>
                      spaceideasdesignstudio@gmail
                      <br />
                      .com
                    </p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="fa-solid fa-phone"></i>
                    <h4>Call:</h4>
                    <p>+91-8116908991</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 mb-5 justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <form
                method="post"
                role="form"
                class="php-email-form"
                onSubmit={handleSubmit(onSubmitContact)}
              >
                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name*"
                      {...register("name", {
                        required: true,
                        minLength: 3,
                      })}
                    />
                    {errors?.name?.type === "required" && (
                      <p style={{ color: "red" }}>**This field is required</p>
                    )}
                    {errors?.name?.type === "minLength" && (
                      <p style={{ color: "red" }}>
                        **This field must contains at least 3 characters
                      </p>
                    )}
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email*"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      })}
                    />
                    {errors?.email?.type === "required" && (
                      <p style={{ color: "red" }}>**This field is required</p>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <p style={{ color: "red" }}>**Invalid Email Format</p>
                    )}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id="subject"
                    placeholder="Phone No.*"
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors?.phone?.type === "required" && (
                    <p style={{ color: "red" }}>**This field is required</p>
                  )}
                  {errors?.phone?.type === "minLength" && (
                    <p style={{ color: "red" }}>
                      **Mobile No. must have 10 characters
                    </p>
                  )}
                  {errors?.phone?.type === "maxLength" && (
                    <p style={{ color: "red" }}>
                      **Mobile No. must not exceed 10 characters
                    </p>
                  )}
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    data-rule="required"
                    placeholder="Your Requirements*"
                    {...register("message", {
                      required: true,
                      minLength: 6,
                    })}
                  ></textarea>
                  {errors?.message?.type === "required" && (
                    <p style={{ color: "red" }}>**This field is required</p>
                  )}
                  {errors?.message?.type === "minLength" && (
                    <p style={{ color: "red" }}>
                      **This field must contains at least 6 characters
                    </p>
                  )}
                </div>

                <div class="text-center mb-3">
                  <button type="submit">
                    {isPending ? <ButtonLoader /> : <>Send Message</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
