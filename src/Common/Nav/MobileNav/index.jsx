import React, { useState, useRef } from 'react'

// react router
import { Link } from 'react-router-dom';

// icons
import { BiMenu } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'

export default function MobileNav() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const mobileNavInner = useRef(null);
    const mobileNav = useRef(null);

    const toogleNav = () => {
        const height = mobileNavInner.current.clientHeight;
        if (isNavBarOpen) {
            mobileNavInner.current.style = `top:-${height}px`
            setIsNavBarOpen(false);
        } else {
            mobileNavInner.current.style = `top:${mobileNav.current.clientHeight}px`;
            setIsNavBarOpen(true);
        }
        console.log(mobileNav.current.clientHeight);
        console.log(height);
    }
    
    return (
        <nav className="my-nav-mobile d-lg-none p-3  d-flex flex-row justify-content-between align-items-center position-relative" ref={mobileNav}>
            <BiMenu className="toogle-btn fs-3" onClick={toogleNav} />
            <Link to="/" className="logo-mobile">
                <img src="assets\images\logo-mobile.svg" alt='logo' />
            </Link>
            <p></p>
            <div className="my-nav-inner d-flex flex-column position-absolute p-2" ref={mobileNavInner}>
                <div className="my-nav-item p-2">
                    <Link className="nav-link text-white d-flex justify-content-between align-items-center" to="/" onClick={toogleNav}>
                        Home
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="my-nav-item p-2">
                    <Link className="nav-link text-white d-flex justify-content-between align-items-center" to="/about" onClick={toogleNav} >
                        About Us
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="my-nav-item p-2">
                    <Link className="nav-link text-white d-flex justify-content-between align-items-center" to="/gallery" onClick={toogleNav} >
                        Gallery
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="my-nav-item p-2">
                    <Link className="nav-link text-white d-flex justify-content-between align-items-center" to="/careers" onClick={toogleNav} >
                        Careers
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="my-nav-item p-2">
                    <Link className="nav-link text-white d-flex justify-content-between align-items-center" to="/contact" onClick={toogleNav} >
                        Contact Us
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="my-nav-item d-flex p-2 justify-content-between align-items-center">
                    <Link className="btn my-btn" to="/get-quote" onClick={toogleNav} >
                        Get A Quote
                    </Link>
                </div>
            </div>
        </nav>
    )
}
