import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { dataEdit } from "../graphQl/cache";

const NavbarHome = () => {
  const history = useHistory();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setAccess(true);
    } else {
      setAccess(false);
    }
  }, [access]);
  function goToHome(destination) {
    switch (destination) {
      case "home":
        history.push("/");
        break;
      case "login":
        history.push("/login");
        break;
      case "GPU":
        dataEdit(false);
        history.push("/Gpu");
        break;
      case "CPU":
        dataEdit(false);
        history.push("/cpu");
        break;
      case "RAM":
        dataEdit(false);
        history.push("/ram");
        break;
      case "Storage":
        dataEdit(false);
        history.push("/storage");
        break;
      case "Power Supplay":
        dataEdit(false);
        history.push("/powersupplay");
        break;
      case "Casing":
        dataEdit(false);
        history.push("/casing");
        break;
      case "Motherboard":
        dataEdit(false);
        history.push("/motherboard");
        break;
      case "Cpu Coller":
        dataEdit(false);
        history.push("/cpucooler");
        break;
      case "config":
        dataEdit(false);
        history.push("/config");
        break;
      case "games":
        dataEdit(false);
        history.push("/games");
        break;

      default:
      // code block
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/login");
  }
  return (
    <Navbar bg="light" expand="lg" className="fixed">
      <Navbar.Brand href="#home">Pc GapTech</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!access ? (
            <></>
          ) : (
            <Nav.Link onClick={() => goToHome("home")}>Home</Nav.Link>
          )}

          {!access ? (
            <Nav.Link onClick={() => goToHome("login")}>Login</Nav.Link>
          ) : (
            <Nav>
              <NavDropdown title="AddProduct" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => goToHome("CPU")}>
                  CPU
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("Cpu Coller")}>
                  CPU Coller
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("Motherboard")}>
                  Motherboard
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("GPU")}>
                  GPU
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("RAM")}>
                  RAM
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("Storage")}>
                  Storage
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("Power Supplay")}>
                  Power Supplay
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("Casing")}>
                  Casing
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="AddConfig" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => goToHome("games")}>
                  Add Games
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToHome("config")}>
                  Add Config
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          )}
          <Nav.Link onClick={() => goToHome("login")}>Login</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
