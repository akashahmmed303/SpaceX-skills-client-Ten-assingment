import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCart from '../../Shared/CourseSummaryCart/CourseSummaryCart';

const Home = () => {
  const allData = useLoaderData();
  return (
    <div>
      <h2>This is Home Component : {allData.length}</h2>
      <ButtonGroup>
        <Button variant='outline-primary'>
          <FaGoogle></FaGoogle> Login with Google{' '}
        </Button>
        <Button variant='outline-dark'>
          <FaGithub></FaGithub> Login withGitHub
        </Button>
      </ButtonGroup>

      {allData.map(data => (
        <CourseSummaryCart key={data._id} data={data}></CourseSummaryCart>
      ))}
    </div>
  );
};

export default Home;
