import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed text-white ">

                <div className="footer-left">

                    <h3>TechMate <span>Zone</span></h3>

                    <p className="footer-links">
                        <Nav.Link style={{ padding: '0' }} as={Link} eventKey={1} to="/">Home</Nav.Link>

                        <Nav.Link style={{ padding: '0' }} as={Link} eventKey={2} to="/products">Products</Nav.Link>

                        <Nav.Link style={{ padding: '0' }} as={Link} eventKey={4} to="/portfolio">Portfolio</Nav.Link>

                        <Nav.Link style={{ padding: '0' }} as={Link} eventKey={5} to="/dashboard">My Dashboard</Nav.Link>
                    </p>

                    <p className="footer-company-name text-white"> TechMate Zone {new Date().getFullYear()}</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>333 ,Maluher</span> Banaripara, Barishal</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a className="text-white " href="mailto:support@company.com">support@techmate.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about text-white">
                        <span>About the company</span>
                        Through a user-friendly and intuitive interface, Techmate gives you all the tools you need to significantly improve your building operations.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;