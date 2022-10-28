import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mb-4'>
      <Navbar collapseOnSelect expand='lg' bg='warning' variant='light'>
        <Container>
          <Navbar.Brand>
            <div className='d-flex align-center '>
              <p className='me-2'>
                <FaApple></FaApple>
              </p>
              <h4>SpaceX Skills</h4>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                {' '}
                <Link to='/'>Courses</Link>
              </Nav.Link>
              <Nav.Link href='#blog'> Blog</Nav.Link>
              <Nav.Link href='#faq'> FAQ</Nav.Link>
              <Nav.Link href='#darkmode'> DarkTheme</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
