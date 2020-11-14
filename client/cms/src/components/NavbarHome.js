import React from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const NavbarHome = () => {

    const history = useHistory()
    function goToHome(destination) {
        switch (destination) {
            case "home":
                history.push("/home")
                break;
            case "login":
                history.push("/login")
                break;
            case "GPU":
                history.push("/addGpu")
                break;
            case "CPU":
                history.push("/addcpu")
                break;
            case "RAM":
                history.push("/addram")
                break;
            case "Storage":
                history.push("/addstorage")
                break;
            case "Power Supplay":
                history.push("/addpowersupplay")
                break;
            case "Casing":
                history.push("/addcasing")
                break;
            case "Motherboard":
                history.push("/addmotherboard")
                break;
            case "Cpu Coller":
                history.push("/addcpucoller")
                break;

            default:
            // code block
        }
    }
    return (
        <Navbar bg="light" expand="lg" className="fixed">
            <Navbar.Brand href="#home">Pc GapTech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => goToHome("home")}>Home</Nav.Link>
                    <NavDropdown title="AddProduct" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => goToHome("CPU")}>CPU</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("Cpu Coller")}>CPU Coller</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("Motherboard")}>Motherboard</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("GPU")}>GPU</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("RAM")}>RAM</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("Storage")}>Storage</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("Power Supplay")}>Power Supplay</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goToHome("Casing")}>Casing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => goToHome("login")}>Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarHome
