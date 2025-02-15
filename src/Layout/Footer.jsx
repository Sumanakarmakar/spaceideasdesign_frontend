import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <Container>
          <Box>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              className="footer-cta"
            >
              <Grid xs={12} sm={4} md={4}>
                <Box className="single-cta" sx={{ display: "flex" }}>
                  <LocationOnIcon
                    sx={{
                      color: "rgb(183, 122, 10)",
                      fontSize: "30px",
                      float: "left",
                      marginTop: "20px",
                    }}
                  />

                  <Box className="cta-text">
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      Find us
                    </Typography>
                    <Box sx={{ padding: "0px 30px 10px 0px" }}>
                      <span>Gopalpur Bazar, Akuni, Chanditala, Hooghly</span>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <Box className="single-cta" sx={{ display: "flex" }}>
                  <PhoneEnabledIcon
                    sx={{
                      color: "rgb(183, 122, 10)",
                      fontSize: "30px",
                      float: "left",
                      marginTop: "20px",
                    }}
                  />

                  <Box className="cta-text">
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      Call us
                    </Typography>
                    <span>+91-8116908991</span>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <Box className="single-cta" sx={{ display: "flex" }}>
                  <EmailIcon
                    sx={{
                      color: "rgb(183, 122, 10)",
                      fontSize: "30px",
                      float: "left",
                      marginTop: "20px",
                    }}
                  />

                  <Box className="cta-text">
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      Mail us
                    </Typography>
                    <span>spaceideasdesignstudio@gmail.com</span>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              className="footer-cta"
            >
              <Grid xs={12} sm={4} md={4}>
                <Box className="single-cta">
                  <Box className="cta-text">
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontSize: "30px",
                        fontWeight: 600,
                        marginBottom: "2px",
                        marginTop: 2,
                      }}
                    >
                      Space Idea's
                      <br /> Design Studio
                    </Typography>
                    <Box sx={{ padding: "10px 20px 10px 0px" }}>
                      <span>Gopalpur Bazar, Akuni, Chanditala, Hooghly</span>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#fff",
                        fontSize: "25px",
                        fontWeight: 600,
                        marginBottom: "10px",
                        ml: 2,
                      }}
                    >
                      Follow us
                    </Typography>
                    <FacebookOutlinedIcon sx={{ color: "#1C66CA", ml: 2 }} />
                    <InstagramIcon sx={{ color: "#C21CCA", ml: 1 }} />
                    {/* <TwitterIcon sx={{ color: '#7ADD45', ml: 1 }} />
                                        <GoogleIcon sx={{ color: '#5B2CD8', ml: 1 }} /> */}
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#fff", ml: 2, mt: 2 }}>
                      2024
                      <CopyrightIcon />
                      All Rights Reserved
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <Box className="footer-widget">
                  <Box>
                    <Typography variant="h4">Useful Links</Typography>

                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <List className="list-item">
                          <Link className="link_footer" to="/">
                            <ListItem disablePadding>
                              <ListItemText
                                primary="Home"
                                sx={{ marginTop: "18px" }}
                              />
                            </ListItem>
                          </Link>

                          <Link className="link_footer" to="/about">
                            <ListItem disablePadding>
                              <ListItemText primary="About" />
                            </ListItem>
                          </Link>

                          <Link className="link_footer" to="/services">
                            <ListItem disablePadding>
                              <ListItemText primary="Services" />
                            </ListItem>
                          </Link>

                        </List>
                      </Grid>
                      <Grid item xs={6}>
                        <List className="list-item">
                          <Link className="link_footer" to="/Pricing">
                            <ListItem disablePadding>
                              <ListItemText
                                primary="Pricing"
                                sx={{ marginTop: "18px" }}
                              />
                            </ListItem>
                          </Link>

                          <Link className="link_footer" to="/testimonial">
                            <ListItem disablePadding>
                              <ListItemText primary="Testimonial" />
                            </ListItem>
                          </Link>
                        </List>
                      </Grid>
                    </Grid>

                    <Typography variant="body2" className="opening_hrs_list">
                      24*7 Open, You can contact through given phone no <br />{" "}
                      at any time
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <Box className="footer-widget">
                  <Box>
                    <Typography variant="h4">Get in Touch</Typography>
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.836723389132!2d88.16547777530523!3d22.734309379376867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f87d084739a677%3A0xc15303a6ae553e4e!2sGopalpur%20Bazar!5e0!3m2!1sen!2sin!4v1734896757762!5m2!1sen!2sin"
                      width="300"
                      height="200"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
