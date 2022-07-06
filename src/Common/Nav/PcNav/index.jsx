import React from 'react'

// react router
import { Link } from 'react-router-dom';

export default function PcNav() {
    return (
        <nav className="navbar d-none d-lg-flex navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="assets\images\logo.svg" alt='logo' />
                </Link>
                <div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/careers">
                                Careers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <Link className="btn my-btn" to="/get-quote">
                            Get A Quote
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>)
}
