import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faChartBar,
  faCalculator,
  faShoppingCart,
  faMinus,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";

const MedflowNavbar = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg" className="shadow rounded navBar">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo">
            <FontAwesomeIcon icon={faClinicMedical} size="lg" className="d-inline-block align-top" />
            <h3> eMedRecords</h3>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto" >
           
            <Nav.Link href="#Medflows" className="navLink activeLink">
              <FontAwesomeIcon
                icon={faNotesMedical}
                className="icon"
              />
              <span className="strong">Dashboard</span>
            </Nav.Link>
            <Nav.Link href="#differentials" className="navLink">
              <FontAwesomeIcon icon={faMinus}className="icon" />
              <span className="strong">Differentials</span>
            </Nav.Link>
            <Nav.Link href="#calculators" className="navLink">
              <FontAwesomeIcon icon={faCalculator}className="icon" />
              <span className="strong">Calculators</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MedflowNavbar;
