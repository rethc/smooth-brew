import React from "react";
import PropTypes from "prop-types";
//import "./bootstrap.min.css";
//import "./layout.css";
import { Link } from "gatsby";
import logo from "../images/logo.svg";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import Hidden from "@material-ui/core/Hidden";


import "./layout.css";

const useStyles = makeStyles({
  appBar: {
    background: "#352627"
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between"
  },
  linkText: {
    textDecoration: "none",
    color: "#f7f7f7",
    fontFamily: "Merriweather"
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
            <Link to="/">
              <img src={logo} alt="Smooth Brew Logo" />
            </Link>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                <ListItem button>
                  <Typography variant="h6">
                    <AnchorLink
                      to="/#menu"
                      className="nav-link"
                      title="Menu"
                      className={classes.linkText}
                    />
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="h6">
                    <AnchorLink
                      to="/#products"
                      className="nav-link"
                      title="Products"
                      className={classes.linkText}
                    />
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="h6" noWrap="false">
                    <AnchorLink
                      to="/#our-story"
                      className="nav-link"
                      title="Our Story"
                      className={classes.linkText}
                    />
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="h6">
                    <Link
                      to="/about"
                      className="nav-link"
                      title="About"
                      className={classes.linkText}
                    >
                      About
                 </Link>
                  </Typography>
                </ListItem>
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>

      {children}
      <footer className="footer py-3">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-yellow text-center">
              <h6>
                <small>
                  &copy;{new Date().getFullYear().toString()} Chesda Reth. All
                rights reserved.
              </small>
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
