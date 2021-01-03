import React from "react";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Img from "gatsby-image";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fluid(maxHeight: 410) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  productTitle: {
    fontFamily: "Merriweather",
    textAlign: "center",
    marginTop: "0.5em",
  },

  button: {
    background: "#D38D5F",
    marginBottom: "0.5em",
    "&:hover": {
      background: "#9c6846",
    },
  },
  productButtons: {
    justifyContent: "center",
  },
  productDescription: {
    fontSize: "small"
  },
  productPrice: {
    marginTop: "0.5em",
    marginBottom: "-1.5em",
    textAlign: "center",
    color: "#e25b0d",
    fontSize: "small"
  },
});

const Products = () => {
  const classes = useStyles();

  return (
    <StaticQuery
      query={getProducts}
      render={(data) => {
        return (
          <section className="products">
            <div id="products">
              <Title title="Products" />
              <Container maxWidth="lg">
                <Grid container spacing={2} className={classes.root}>
                  {data.products.edges.map(({ node: product }) => {
                    return (
                      <Grid
                        item
                        xs={6}
                        className={classes.root}
                        key={product.id}
                      >
                        <Card variant="outlined">
                          <CardContent>
                            <CardActionArea>
                              <Img
                                fluid={product.image.fluid}
                                className="card-img-top product-image"
                                alt="Product Image"
                                key={product.id}
                              />
                            </CardActionArea>
                            <Typography
                              className={classes.productTitle}
                              gutterBottom
                            >
                              {product.title}
                            </Typography>
                            <Typography gutterBottom className={classes.productDescription}>
                              {product.description.description}
                            </Typography>
                            <Typography
                              className={classes.productPrice}
                            >
                              $ {product.price}
                            </Typography>
                          </CardContent>
                          <CardActions className={classes.productButtons}>
                            <Button
                              className={`${classes.button} snipcart-add-item`}
                              variant="contained"
                              color="primary"
                              data-item-id={product.id}
                              data-item-name={product.title}
                              data-item-price={product.price}
                              data-item-image={product.image.fluid.src}
                              data-item-url="https://smooth-brew.netlify.app/"
                            >
                              Add to Cart
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Container>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Products;
