import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
// import {Link} from "react-router-dom"
import InterestForm from "./Interest-form";
import LanguageToggle from "./Language-toggle";
function MainNav() {
  return (

<Navbar bg="light" data-bs-theme="light">
<Container>
<NavbarBrand href="/">
<InterestForm/>
</NavbarBrand>
<Nav className="me-auto">
  <Nav.Link href="/">Families In Need of Support</Nav.Link>
  <Nav.Link href="/Resources">Resources</Nav.Link>
  <Nav.Link href="/About">About us</Nav.Link>
  <LanguageToggle/> 
</Nav>
</Container>
</Navbar>
)}

export default MainNav
