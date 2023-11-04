import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/" >Shopping Cart</NavLink>
            <div>
                <NavLink to="/" >Home Page</NavLink>
                <NavLink to="/cart" >Cart Page</NavLink>
            </div>
        </div>
    )
}

export default Navbar;