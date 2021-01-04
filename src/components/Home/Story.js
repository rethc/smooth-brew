import React from "react";
import Container from "@material-ui/core/Container";
import Title from "../Globals/Title";
import Img from "gatsby-image";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";

function Item(props) {
  return (
    <Paper>
      <Img fluid={props.item.name} />
      <small>{props.item.description}</small>
    </Paper>
  );
}

const Story = ({ coffeeGallery1, coffeeGallery2, coffeeGallery3, coffeeGallery4 }) => {

  var items = [
    {
      name: coffeeGallery1,
      description: "Photo by Marta Dzedyshko from Pexels"
    },
    {
      name: coffeeGallery2,
      description: "Photo by Porapak Apichodilok from Pexels"
    },
    {
      name: coffeeGallery3,
      description: "Photo by Juan Pablo Serrano Arenas from Pexels"
    },
    {
      name: coffeeGallery4,
      description: "Photo by Chevanon Photography from Pexels"
    },
  ];

  return (
    <section className="story">
      <div id="our-story">
        <Container maxWidth="lg">
          <Title title="Our Story" />
          <hr />
          <h3>Since 1992</h3>
          <p className="story-text">
            A perfect cup of coffee is magical. It can energize, inspire,
            comfort, unite people, and even make your day.
          </p>
          <p className="story-text">
            Since 1992, our passion for exceptional coffee, tea and juice has
            been the heart of what we do. Ever since we started, we’ve held onto
            the simple joy inspired by that perfect cup—and vowed to make your
            everyday moments that much better.
          </p>
          <p className="story-text">
            We hope you savor every moment of joy you experience here at Smooth
            Brew.
          </p>
          <div className="story-image">
            <Carousel>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>

          <h3>Our Coffee</h3>
          <p className="story-text">
            We opened our first location in Wellington as one of the first
            specialty roasters in the city. We’re still based in Wellington, the
            city we love; but now we’re sharing the joy of Smooth Brew far and
            wide, with fans all around the world.
          </p>
          <p className="story-text">
            Our Coffee is roasted in small batches frequently to ensure that you
            can always purchase fresh coffee. We recommend that you buy a small
            amount often rather than stocking up to make sure you have the best
            tasting coffee.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default Story;
