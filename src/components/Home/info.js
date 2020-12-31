import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container";

export default function info() {
  return (
    <div id="our-story">
      <Container maxWidth="lg">

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        <Link to="/about">
          <button className="btn text-uppercase btn-yellow">
            Visit Us
              </button>
        </Link>
      </Container>
    </div>
  );
}