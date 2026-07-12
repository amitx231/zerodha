import React from 'react'

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-lg sticky-top shadow-sm"
            style={{ backgroundColor: "#fff", height: "4rem" }}
        >
            <div className="container">
                <Link className="navbar-brand p-5" to="/">
                    <img
                        src="/images/logo.svg"
                        style={{ width: "25%" }}
                        alt="Zerodha"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                Signup
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}