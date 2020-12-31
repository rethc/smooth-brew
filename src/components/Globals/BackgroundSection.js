import React from "react";
import BackgroundImage from "gatsby-background-image";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    color: "#f7f7f7",
    fontFamily: "Open Sans Condensed",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});


export default function BackgroundSection({ img, styleClass, title, children, }) {
  const classes = useStyles();
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h3">
        {children}
      </Typography>
    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
