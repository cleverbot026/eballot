import logo from '../logo.svg'
import React from "react"
import { Container, Navbar, Button } from 'react-bootstrap'

export default function Navigation() {

    return (
    <Container className='bg-dark' fluid>
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home">
                <img 
                alt=""
                src={logo}
                width="50"
                height="50"
                />{' '} Personal eBallot
            </Navbar.Brand>
            <Button>
            <i class="bi bi-moon rotate"/>{' '}Dark Mode
            </Button>
            </Container>
        </Navbar>
    </Container>
    )
}
