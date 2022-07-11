import React from "react";

function Nav(){
    return (
        <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login/SignUp</a>
                    </li>
                </ul>
        </nav>
    );
}
export default Nav;