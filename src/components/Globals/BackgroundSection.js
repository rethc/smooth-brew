import React from "react";
import BackgroundImage from "gatsby-background-image";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  title: {
    color: "#f7f7f7",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Open Sans Condensed",
    textShadow: "2px 4px 3px rgba(0,0,0,0.3)"

  },
  subtitle: {
    color: "#f7f7f7",
    fontFamily: "Roboto",
    textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
    marginBottom: "2em"
  },
  button: {
    background: "#D38D5F",
    color: "#352627"
  }
});

export default function BackgroundSection({ img, styleClass, title, children, }) {
  const classes = useStyles();
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {children}
        </Typography>
        <Button variant="contained" className={classes.button}>Read More</Button>
      </Grid>
    </BackgroundImage>
  );
}
BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
