import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { Avatar, Grid, Menu, MenuItem, Tooltip } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const handleLogout = () => {
  //     dispatch(logout())
  //     toast("Successfully Logged Out")
  // }

  // let name = localStorage.getItem("name")

  //for appbar menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <Link to="/" className="text-black">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/services">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
      >
        <CssBaseline />
        <AppBar component="nav" className="navbar-custom">
          <Toolbar className="navbar-custom-toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              className="nav-toggle-btn"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="logo_holder"
              sx={{
                maxWidth: "150px",
                display: { xs: "none", sm: "block" },
                alignItems: "center",
              }}
            >
              <img
                className="nav_logo"
                src="/img/nav-logo.png"
                alt="si"
                width="100%"
              />
            </Typography>
            <Box
              sx={{
                // flexGrow: 1,
                marginLeft: "auto",
                display: { xs: "none", sm: "block" },
                paddingRight: "30px",
              }}
            >
              <Link to="/">
                <Button sx={{ color: "#fff" }}>Home</Button>
              </Link>

              <Link to="/about">
                <Button sx={{ color: "#fff" }}>About</Button>
              </Link>

              <Link to="/services">
                <Button sx={{ color: "#fff" }}>Service</Button>
              </Link>

              <Link to="/pricing">
                <Button sx={{ color: "#fff" }}>Pricing</Button>
              </Link>
            </Box>

            <Box
              className="contact_btn_area"
              sx={{
                borderLeft: "1px solid #ccc",
                paddingLeft: "30px",
              }}
            >
              <Link to="/contact">
                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgb(183, 122, 10)",
                    fontWeight: 600,
                  }}
                >
                  Contact Now
                  <LoginIcon sx={{ marginLeft: "5px" }} />
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
