import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Thumbnail } from 'react-bootstrap';

const Header = () => (
  <Navbar collapseOnSelect fixedTop>
    <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/" className="navLink" activeClassName="is-active" exact={true}>Mouph</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>  
  <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          <NavLink to="/" className="navLink" activeClassName="is-active" exact={true}>Home</NavLink>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <NavLink to="/lip" className="navLink" activeClassName="is-active">LIP</NavLink>
        </NavItem>
        <NavItem eventKey={3} href="#">
          <NavLink to="/thebanisters" className="navLink" activeClassName="is-active">The Banisters</NavLink> 
        </NavItem>
        <NavItem eventKey={4} href="#">
          <NavLink to="/youthandcanvas" className="navLink" activeClassName="is-active">Youth & Canvas</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;
