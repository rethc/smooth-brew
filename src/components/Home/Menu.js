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
    return items.node.category
  })
  //The Set object lets you store unique values of any type, whether primitive values or object references.
  let tempCategories = new Set(tempItems)
  //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]

  return categories
}


const useStyles = theme => ({
  button: {
    background: "#D38D5F",
    justifyContent: 'center'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
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
});



class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { coffeeItems: items }
      })
    }
  }

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
                <ButtonGroup className={classes.button} fullWidth={true}>
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
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={1}>
                    <Grid item>
                      {this.state.coffeeItems.map(({ node }) => {
                        return (
                          <>
                            <ButtonBase className={classes.image} key={node.id}>
                              <Img fixed={node.image.fixed} />
                            </ButtonBase>
                            <Grid item xs={12} sm container>
                              <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    {node.title}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                    {node.description.description}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography variant="subtitle1">{node.price}</Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Container>
          </div>
        </section >
      );
    } else {
      return (
        <div id="menu">
          <section className="menu py-5">
            <div className="container">
              <Title title="Menu" />
              <div className="row">
                <div className="col-10 col-sm-6 mx-auto text-center">
                  <p className="lead text-muted mb-5">
                    There are no items to display.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(Menu);
