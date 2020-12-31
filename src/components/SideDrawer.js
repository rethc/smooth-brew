import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import { useState } from "react"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,

    },
});


const SideDrawer = () => {

    const classes = useStyles();

    const [state, setState] = useState({ right: false })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                component="nav"
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
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>

        </>
    );
}
export default SideDrawer