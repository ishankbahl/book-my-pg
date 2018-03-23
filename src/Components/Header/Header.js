import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";

import "./Header.css";

class Header extends React.Component{

    render(){

        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse id="collapse-both" >
                    <Nav>
                        <NavDropdown eventKey={1} title="LOCATIONS" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>NORTH CAMPUS</MenuItem>
                            <MenuItem eventKey={1.2}>SOUTH CAMPUS</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="ABOUT US" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>THE EXPERIENCE</MenuItem>
                            <MenuItem eventKey={2.2}>NATIONAL</MenuItem>
                            <MenuItem eventKey={2.3}>THE DIFFERENCE</MenuItem>
                            <MenuItem eventKey={2.4}>PARENTS</MenuItem>
                            <MenuItem eventKey={2.5}>FAQS</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">BookMyPG</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse id="collapse-both">
                    <Nav>
                        <NavDropdown eventKey={3} title="CONTACT" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>TALK TO US</MenuItem>
                            <MenuItem eventKey={3.2}>COME AND SEE US</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">
                            INVESTORS
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

    }

}

export default Header;