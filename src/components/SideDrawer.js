import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#333333",
        fontFamily: "Open Sans Condensed",
    },
});

const SideDrawer = () => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ [anchor]: open });
    };

    const sideDrawerList = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <ListItem button>
                    <AnchorLink to="/#menu" title="Menu" className={classes.linkText} />
                </ListItem>
                <ListItem button>
                    <AnchorLink
                        to="/#products"
                        title="Products"
                        className={classes.linkText}
                    />
                </ListItem>
                <ListItem button>
                    <AnchorLink
                        to="/#our-story"
                        title="Our Story"
                        className={classes.linkText}
                    />
                </ListItem>
                <ListItem button>
                    <Link to="/about" title="About Us" className={classes.linkText}>
                        About
            </Link>
                </ListItem>
                <ListItem button>
                    <ShoppingCartIcon className="snipcart-checkout" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <Menu style={{ color: "#f7f7f7" }} />
            </IconButton>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </>
    );
};
export default SideDrawer;
