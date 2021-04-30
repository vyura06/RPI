import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Navibar() {
    return(
        <>
            <Navbar collapseOnSelect expend="lg" bg='dark' variant='dark'>
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variants="primary" className="mr-2">Log In</Button>
                        <Button variants="primary">Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        
        </>

    );
}