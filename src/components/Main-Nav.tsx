import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
// import {Link} from "react-router-dom"
import InterestForm from "./Interest-form";
import LanguageToggle from "./Language-toggle";
import { useTranslation } from "react-i18next";

function MainNav() {
  const { t } = useTranslation()
  return (

<Navbar className="bg-body-tertiary justify-content-between">
<Container>
<NavbarBrand>
<InterestForm/>
</NavbarBrand>
<Nav className="me-auto">
  <Nav.Link href="/">{t("families")}</Nav.Link>
  <Nav.Link href="/Resources">{t("resources")}</Nav.Link>
  <Nav.Link href="/About">{t("about")}</Nav.Link>
  <LanguageToggle/> 
</Nav>
</Container>
</Navbar>
)}

export default MainNav
