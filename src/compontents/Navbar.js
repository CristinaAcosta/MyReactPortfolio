import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';


function TopBar() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand as="div">Portfolio</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link to="/" style={{ textDecoration: "none" }}><Nav.Link as="div">Home</Nav.Link></Link>
                    <Link to="/About" style={{ textDecoration: "none" }}><Nav.Link as="div">About</Nav.Link></Link>
                    <Link to="/Portfolio" style={{ textDecoration: "none" }}><Nav.Link as="div">Portfolio</Nav.Link></Link>
                    <Link to="/Contact" style={{ textDecoration: "none" }}><Nav.Link as="div">Contact</Nav.Link></Link>
            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar;