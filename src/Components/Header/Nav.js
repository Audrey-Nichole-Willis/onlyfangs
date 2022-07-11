import React from "react";

function Nav(){
    return (
    <nav className="navbar navbar-expand-lg">
        <a href="#" className="navbar-brand">OnlyFangs</a>
        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#togglingNav"
            aria-controls="togglingNav"
            aria-expanded="true"
            aria-label="Toggle navigation">
                <i class="fa-solid fa-bars navbar-toggler-icon"></i>
            </button>
        <div className="collapse navbar-collapse" id="togglingNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item"> 
                    <a href="#" className="nav-link"> About</a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                            Features
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Free</a>
                            <a className="dropdown-item" href="#">Pro</a>
                            <div className="dropdown-divider" href="#"></div>
                            <a className="dropdown-item" href="#">Become a Vendor</a>
                        </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> FAQ </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login/SignUp </a>
            </li>
        </ul>
        </div>
    </nav>
    );
}
export default Nav;