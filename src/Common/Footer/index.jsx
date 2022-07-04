import React from 'react'
// react router dom
import { Link } from 'react-router-dom'
// css
import './footer.css'

// icons
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'


export default function Footer() {
    return (
        <footer className=''>
            <div className='container'>
                <div className='row p-md-3 pl-md-5 pr-md-5 '>
                    <div className='col-md p-3'>
                        <Link to="/" className="footer-logo">
                            <img src="assets\images\logo.svg" />
                        </Link>
                        <br />
                        <a href='https://www.linkedin.com/' target="_blank">
                            <GrLinkedinOption className='footer-icon' />
                        </a>
                        <a href='https://www.instagram.com/' target="_blank">
                            <AiFillInstagram className='footer-icon' />
                        </a>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                    </div>
                    <div className='col-md p-3'>
                        <h3>About</h3>
                        <Link to="/about" className="footer-link">
                            About Us
                        </Link>
                        <Link to="/terms-and-conditions" className="footer-link">
                            Terms  Condition
                        </Link>
                        <Link to="/privacy-policies" className="footer-link">
                            Privacy & Policy
                        </Link>
                    </div>
                    <div className='col-md p-3'>
                        <h3>Contact</h3>
                        <Link to="/contact" className="footer-link">
                            Contact Us
                        </Link>
                        <a href="tel:+96522222222" className='footer-link'><FaPhoneAlt /> +(965) 22222222,98976545</a>
                        <a href="mailto:info@tnaq8.com" className='footer-link'><MdOutlineMail /> info@tnaq8.com</a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='row p-md-3 pl-md-5 pr-md-5 text-white'>
                        <div className='col-md text-md-center'>Copyright ©  2021-2022 TNA - All Rights Reserved</div>
                        <div className='col-md text-md-center'>Powered by Line</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
