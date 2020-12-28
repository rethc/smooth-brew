import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges
        };

    }

    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our Menu" />
                        {/* categories */}
                        {/* items */}
                        <div className="row">
                            {this.state.coffeeItems.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

            );
        }
        else {
            return (<section className="menu py-5">
                <div className="container">
                    <Title title="Best of our Menu" />
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center">
                            <p className="lead text-muted mb-5">There are no items to display.</p>
                        </div>
                    </div>
                </div>
            </section>);
        }
    }
}
