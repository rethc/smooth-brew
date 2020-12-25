import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"


export default class NavBar extends Component {
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about',
                text: 'about'
            },
        ]
    }

    navbarHandler = () => {
        console.log("hello");
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm">
            </nav>
        )
    }
}
