import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category;
  });
  //The Set object lets you store unique values of any type, whether primitive values or object references.
  let tempCategories = new Set(tempItems);
  //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  console.log(categories);
  return categories;
}

const useStyles = theme => ({
  button: {
    background: "#D38D5F",
    justifyContent: "center",
    marginBottom: "0.5em"
  },
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0.2em',
    maxWidth: 480,
    background: "#f7f7f7",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  itemText:
  {
    fontFamily: "Merriweather",
  },
  itemPrice:
  {
    textAlign: "right",
    color: "#e25b0d"
  }
});

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }

  handleItems = category => {
    let tempItems = [...this.state.items];
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems };
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { coffeeItems: items };
      });
    }
  };

  render() {
    const { classes } = this.props;
    if (this.state.items.length > 0) {
      return (
        <section className="menu">
          <div id="menu">
            <Container maxWidth="lg">
              <Title title="Menu" />
              {/* ===== CATEGORIES ===== */}
              <Container maxWidth="sm">
                <ButtonGroup className={classes.button} fullWidth={true} >
                  {this.state.categories.map((category, index) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => {
                          this.handleItems(category)
                        }}
                      >
                        {category}
                      </Button>

                    );
                  })}
                </ButtonGroup>
              </Container>
              {/* ===== ITEMS ===== */}
              <Grid container className={classes.root}>
                {this.state.coffeeItems.map(({ node }) => {
                  return (
                    <Paper className={classes.paper} >
                      <Grid container spacing={5}>
                        <Grid item container>
                          <ButtonBase className={classes.image} key={node.id}>
                            <Img fixed={node.image.fixed} />
                          </ButtonBase>
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item xs>
                                <Typography gutterBottom variant="h6" className={classes.itemText}>
                                  {node.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  {node.description.description}
                                </Typography>
                              </Grid>

                              <Typography variant="body1" className={classes.itemPrice}>$ {node.price}</Typography>

                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  );
                })}
              </Grid>
            </Container>
          </div>
        </section>
      );
    } else {
      return (
        <div id="menu">
          <section className="menu">
            <div className="container">
              <Title title="Menu" />
              <p style={{ textAlign: "center" }}>There are no items to display. Please check later</p>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(Menu);
