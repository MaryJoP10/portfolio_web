import React from "react"
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
            <Link to='/about'>
                <h1>About Me</h1>
            </Link>
            <Link to='/project'>
                <h1>Projects</h1>
            </Link>
        </div>
    )
};

export default Navbar;