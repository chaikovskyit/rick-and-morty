import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import logo from '../images/logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <img className='logo' src={logo} alt="logo icon"/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='nav-link' to="/">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/episodes">Episodes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/locations">Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/myWatchList">My watch list</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;