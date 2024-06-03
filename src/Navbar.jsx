import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "darkgreen", padding: "1rem" }}>
            <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0, justifyContent: "center" }}>
                <li style={{ margin: "0 1rem" }}>
                    <NavLink
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        Home
                    </NavLink>
                </li>
                <li style={{ margin: "0 1rem" }}>
                    <NavLink
                        to="/about"
                        style={{ color: "white", textDecoration: "none" }}
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
