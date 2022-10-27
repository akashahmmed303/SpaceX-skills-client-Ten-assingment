import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            <h4>SpaceX Skills</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#courses'> Courses</Nav.Link>
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
