import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderUser = () => {
  return (
    <div>
      <Navbar className='navbar navbar-expand-sm bg-primary navbar-dark'>
        <Navbar.Brand href='/managerpage' className='nav-link'>
          VIP Membership
        </Navbar.Brand>
        
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link className='nav-link' to={'/customerpage'}>
              CustomerPage
            </Link>
            <Link className='nav-link' to={'/managerpage'}>
              ManagerPage
            </Link>           
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderUser;
