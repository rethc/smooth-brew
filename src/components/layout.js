import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from "../images/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import Hidden from "@material-ui/core/Hidden";
import HideOnScroll from "./HideOnScroll";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StyledBadge from "@material-ui/core/Badge";

import "./layout.css";

const useStyles = makeStyles({
  appBar: {
    background: "#352627",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    color: "#f7f7f7",
    fontFamily: "Open Sans Condensed",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  toolbar: {
    minHeight: 20
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  footer: {
    backgroundColor: "#352627",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    padding: "1em 0 ",
  },
  socialButtons: {
    color: "#f7f7f7",
  },
  copyright: {
    color: "#D38D5F",
    marginTop: "0.25em",
    textAlign: "center",
    fontSize: "small"
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <Link to="/">
                <img className="logo" src={logo} alt="Smooth Brew Logo" />
              </Link>

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  <ListItem button>
                    <Typography>
                      <AnchorLink
                        to="/#menu"
                        title="Menu"
                        className={classes.linkText}
                      />
                    </Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography>
                      <AnchorLink
                        to="/#products"
                        title="Products"
                        className={classes.linkText}
                      />
                    </Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography>
                      <AnchorLink
                        to="/#our-story"
                        title="Our Story"
                        className={classes.linkText}
                      />
                    </Typography>
                  </ListItem>
                  <ListItem button>
                    <Typography>
                      <Link
                        to="/about"
                        title="About"
                        className={classes.linkText}
                      >
                        About
                      </Link>
                    </Typography>
                  </ListItem>
                  <ListItem button>
                    <StyledBadge badgeContent={<span className="snipcart-items-count"></span>}>
                      <ShoppingCartIcon className="snipcart-checkout" />
                    </StyledBadge>
                  </ListItem>
                </List>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {children}
      <footer className={classes.footer}>
        <Container>
          <Grid item container spacing={2} justify="center">
            <Grid item component={"a"} target="_blank" href="https://reth.nz">
              <HomeIcon className={classes.socialButtons} fontSize="large" />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              href="https://github.com/rethc"
            >
              <GitHubIcon className={classes.socialButtons} fontSize="large" />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              href="https://www.linkedin.com/in/chesda-reth-8427741b3"
            >
              <LinkedinIcon
                className={classes.socialButtons}
                fontSize="large"
              />
            </Grid>
          </Grid>
          <Typography className={classes.copyright}>
            &copy;{new Date().getFullYear().toString()} Chesda Reth. All rights
            reserved.
          </Typography>
        </Container>
      </footer>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
