import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

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

export default class Menu extends Component {
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
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container" id="menu">
            <Title title="Menu" />
            {/* ===== CATEGORIES ===== */}
            <div className="row mb-4">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* ===== ITEMS ===== */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/* ===== ITEM TEXT ===== */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>
                            <b>{node.title}</b>
                          </small>
                        </h6>
                        <h6 className="mb-0 text-price">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
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
