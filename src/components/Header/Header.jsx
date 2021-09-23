import React from "react";
import "./Header.scss";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Chat with Strangers as a Stranger</Navbar.Brand>
                <Nav className="my-auto">
                    <Nav.Link>Developed by Rajat</Nav.Link>
                    <Nav.Link>Powered by ReactJS, Redux & Go</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
};

export default Header;