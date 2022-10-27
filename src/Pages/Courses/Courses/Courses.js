import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Courses = () => {
  return (
    <div>
      <h2>Courses</h2>

      <ButtonGroup>
        <Button variant='outline-primary'>
          <FaGoogle></FaGoogle> Login with Google{' '}
        </Button>
        <Button variant='outline-dark'>
          <FaGithub></FaGithub> Login withGitHub
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Courses;
