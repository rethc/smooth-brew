import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import AboutInfo from "../components/Home/AboutInfo";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About us" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About us"
      styleClass="about-background"
    />
    <AboutInfo />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default AboutPage;
