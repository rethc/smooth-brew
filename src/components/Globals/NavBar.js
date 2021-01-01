import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <Link to="/" className="nav-link">
            Home
            </Link>
          <AnchorLink
            to="/#menu"
            className="nav-link"
            title="Menu"
          />
          <AnchorLink
            to="/#products"
            className="nav-link"
            title="Products"
          />
          <AnchorLink
            to="/#our-story"
            className="nav-link"
            title="Our Story"
          />
          <Link to="/about" className="nav-link" title="About">
            About
            </Link>
        </div>
      </nav>
    );
  }
}
