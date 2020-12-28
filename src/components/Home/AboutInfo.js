import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function AboutInfo() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Locations"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">Find us in welllington!</p>
            <Link to="/Contact/">
              <button className="btn text-uppercase btn-yellow">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
