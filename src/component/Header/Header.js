import React from 'react'
import { Form, FormControl, Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'
import { FaHome } from "react-icons/fa";
import {BsFillCursorFill} from "react-icons/bs";
import { FaRegHeart} from "react-icons/fa";
import {FiCamera} from "react-icons/fi";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><div className="logo"> Instagram</div> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />   
                        </Form>
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="me-auto my-3 my-lg-1"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><FaHome/></Nav.Link>
                            <Nav.Link href="#action2"><BsFillCursorFill/></Nav.Link>
                            <Nav.Link href="#action3"><FiCamera/> </Nav.Link>
                            <Nav.Link href="#action4">< FaRegHeart/></Nav.Link>
                            <Nav.Link href="#" disabled>
                                
                            </Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
