import React from 'react';
import {
  Button,
  Collapse, Nav, Navbar, NavbarBrand, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const logo = 'logoPlusKkarme.png';
  return (
    <div>
      <Navbar
        expand="sm"
      >
        <Link to="/">
          <img src={logo} alt="logo" height={70} className="logo" />
        </Link>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <Button outline className="registerBtn">
              <Link to="/register">
                Зарегистрироваться
              </Link>
            </Button>
            <Button outline className="loginBtn">
              <Link to="/login">
                Логин
              </Link>
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
