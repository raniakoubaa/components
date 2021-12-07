import React from 'react'
import { Form, FormControl, Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'
import { FaHome } from "react-icons/fa";
import {BsFillCursorFill} from "react-icons/bs";
import { FaRegHeart} from "react-icons/fa";
import {FaRegCompass} from "react-icons/fa";
import {FiPlusSquare} from "react-icons/fi"

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="instagram" width="130px" style={{marginLeft:20}}/></Navbar.Brand>
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
                            <Nav.Link href="#action1"><FaHome size={25}/></Nav.Link>
                            <Nav.Link href="#action5"><FiPlusSquare size={25}/></Nav.Link>
                            <Nav.Link href="#action2"><BsFillCursorFill size={25}/></Nav.Link>
                            <Nav.Link href="#action3"><FaRegCompass size={25}/> </Nav.Link>
                            <Nav.Link href="#action4">< FaRegHeart size={25}/></Nav.Link>

                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
