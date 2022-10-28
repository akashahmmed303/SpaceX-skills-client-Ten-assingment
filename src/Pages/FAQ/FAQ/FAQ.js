import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FAQ = () => {
  const data = useLoaderData();
  const { title, image_url, details } = data;
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Img variant='top' src={image_url} />
        <Card.Text className='mt-2 text-muted'>{details}</Card.Text>
        <a href={image_url} download='pdf'>
          <Button variant='primary'>Download</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default FAQ;
