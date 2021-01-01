import React from "react";
//import Product from "./Product";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"
import Card from '@material-ui/core/Card';
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
  }
});

const Products = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <div id="products">
            <Title title="Products" />
            <Container maxWidth="lg">
              <Grid container spacing={2} className={classes.root}>
                {data.products.edges.map(({ node: product }) => {
                  return (
                    <Grid item xs={6} className={classes.root} key={product.id}>
                      <Card variant="outlined" >
                        <CardContent >
                          <Img fluid={product.image.fluid} className="card-img-top product-image" alt="Product Image" key={product.id} />
                          <Typography variant="h6" className={classes.productTitle} gutterBottom>
                            {product.title}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            {product.description.description}
                          </Typography>

                          <button
                            className="btn btn-yellow mt-3 snipcart-add-item"
                            data-item-id={product.id}
                            data-item-name={product.title}
                            data-item-price={product.price}
                            data-item-image={product.image.fluid.src}
                            data-item-url="https://smooth-brew.netlify.app/"
                          >
                            Add to Cart
                    </button>
                          <Typography variant="body1">$ {product.price}</Typography>
                        </CardContent>
                      </Card >
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>
        )
      }}
    />
  );
}

export default Products;