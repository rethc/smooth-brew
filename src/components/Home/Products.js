import React from "react";
import Product from "./Product";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
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

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <div id="products">
            <Title title="Products" />
            <Container maxWidth="lg">
              <Grid
                container
                spacing={3}
                direction="row"
              >
                {data.products.edges.map(({ node: product }) => {
                  return (
                    <Grid item xs={6}>
                      <Product key={product.id} product={product} />
                    </Grid>);
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