import React from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { dataEdit } from "../graphQl/cache"

const NavbarHome = () => {

    const history = useHistory()
    function goToHome(destination) {
        switch (destination) {
            case "home":
                history.push("/")
                break;
            case "login":
                history.push("/login")
                break;
            case "GPU":
                dataEdit(false)
                history.push("/addGpu")
                break;
            case "CPU":
                dataEdit(false)
                history.push("/addcpu")
                break;
            case "RAM":
                dataEdit(false)
                history.push("/addram")
                break;
            case "Storage":
                dataEdit(false)
                history.push("/addstorage")
                break;
            case "Power Supplay":
                dataEdit(false)
                history.push("/addpowersupplay")
                break;
            case "Casing":
                dataEdit(false)
                history.push("/addcasing")
                break;
            case "Motherboard":
                dataEdit(false)
                history.push("/addmotherboard")
                break;
            case "Cpu Coller":
                dataEdit(false)
                history.push("/addcpucoller")
                break;

            default:
            // code block
        }
    }
    function logout() {
        localStorage.clear()
        history.push("/login")
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
                    {localStorage.acces_token ? <Nav.Link onClick={() => goToHome("login")}>Login</Nav.Link>
                        : <Nav.Link onClick={logout}>Logout</Nav.Link>}
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
