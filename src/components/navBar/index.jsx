import { Form, Button, FormGroup, FormControl, ControlLabel, Navbar, NavDrop, Nav, NavDropdown, } from "react-bootstrap";
import CartWidget from "../CartWidget";

const NavbarComponent = () => {
  return (

    <Navbar bg="light" expand="lg">
    <CartWidget/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Courses</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
         
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default NavbarComponent;
