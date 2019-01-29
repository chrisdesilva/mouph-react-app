import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../styles/Header.css'

const Header = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
    <Navbar.Brand>
      <NavLink to="/" className="navLink" activeClassName="is-active" exact={true}>Mouph</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>  
  <Navbar.Collapse>
      <Nav>
        <NavItem componentClass="span" eventKey={1} href="#">
          <NavLink to="/" className="navLink" activeClassName="is-active" exact={true}>Home</NavLink>
        </NavItem>
        <NavItem componentClass="span" eventKey={2} href="#">
          <NavLink to="/lip" className="navLink" activeClassName="is-active">LIP</NavLink>
        </NavItem>
        <NavItem componentClass="span" eventKey={3} href="#">
          <NavLink to="/thebanisters" className="navLink" activeClassName="is-active">The Banisters</NavLink> 
        </NavItem>
        <NavItem componentClass="span" eventKey={4} href="#">
          <NavLink to="/youthandcanvas" className="navLink" activeClassName="is-active">Youth & Canvas</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;
