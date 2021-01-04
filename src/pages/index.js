import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Story from "../components/Home/Story";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <div className="application">
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Open+Sans+Condensed:wght@700&family=Roboto:wght@300;400;500;700&family=Cabin&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Smooth Brew"
        styleClass="default-background"
        children="Smooth Brew is a café born in Wellington, pursuing freshness and hand-made quality above all else."
      />
      <Story storyCoffeeImage={data.storyCoffeeImage.childImageSharp.fluid} />
      <Menu items={data.menu} />
      <Products />
      <Contact />
    </Layout>
  </div>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    storyCoffeeImage: file(relativePath: { eq:"story-image.webp"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
    }
  }
`;

export default IndexPage;
