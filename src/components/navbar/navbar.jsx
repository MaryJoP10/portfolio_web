import React from "react"
import { NavLink as Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className="navbar-item" to='/'>
                <h1>Home</h1>
            </Link>
            <Link className="navbar-item" to='/about'>
                <h1>About Me</h1>
            </Link>
            <Link className="navbar-item" to='/project'>
                <h1>Projects</h1>
            </Link>
        </div>
    )
};

export default Navbar;