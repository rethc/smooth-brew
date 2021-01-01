import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    paddingTop: "0.8em",
    fontFamily: "Merriweather",
    textAlign: "center",
    color: "#352627",
    marginBottom: "0.5em",
  }
});

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.title}>
      {title}
    </Typography>
  );
}

export default Title;