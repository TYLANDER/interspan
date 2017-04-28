import * as React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavBar.css';

class NavBar extends React.Component<any, any> {

    render() {
        return (
            <div className="navbar-container">
                <Navbar inverse collapseOnSelect className="navbar-border">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Interspan</a>
                        </Navbar.Brand>

                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="navbar-textcolor">
                            <NavItem eventKey={2} href="#">Sign in</NavItem>
                            <NavItem eventKey={2} href="#">Sign up</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}
export default NavBar;