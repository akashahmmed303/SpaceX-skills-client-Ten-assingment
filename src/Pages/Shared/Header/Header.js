import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaApple, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  };
  return (
    <div className='mb-4'>
      <Navbar collapseOnSelect expand='lg' bg='warning' variant='light'>
        <Container>
          <Navbar.Brand>
            <div className='d-flex align-center '>
              <FaApple className='me-2 mt-2'></FaApple>

              <h3>SpaceX Skills</h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/'>Courses</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/blog'>Blog</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/faqs/0282e0e58a5c404fbd15261f11c2ab6a'>FAQ</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>
                {user?.uid ? (
                  <>
                    <span className='me-3'>{user?.displayName}</span>

                    <Button variant='outline-primary' onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                {user?.photoURL ? (
                  <Image
                    style={{ height: '40px' }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
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
