import React from "react";
import "./Header.scss";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>Stranger Chat as a Service</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link>
                        <Navbar.Text>
                            Developed by <a>Rajat </a>
                        </Navbar.Text>
                    </Nav.Link>
                    <Nav.Link>
                        <Navbar.Text>
                             Powered by ReactJS, Redux & Go
                        </Navbar.Text>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>
    )
};

export default Header;