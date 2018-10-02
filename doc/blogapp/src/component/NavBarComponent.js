import React from 'react';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
//----------------------Nav Link must be imported from router DOM -----------------------
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const NavBarComponent = ({ toggleNavbar, navBar }) => {
    return (
        <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!navBar} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to={routes.home} className="nav-link" activeClassName='active'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.authors} className="nav-link" activeClassName='active'>Authors</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.newPost} className="nav-link" activeClassName='active'>New Post</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBarComponent;