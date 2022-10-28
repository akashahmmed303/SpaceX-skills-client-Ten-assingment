import React from 'react';
import { FaSignal, FaClock, FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummaryCart = ({ data }) => {
  const { title, _id, details, image_url, level, time, rating } = data;
  console.log(data);
  return (
    <Card className='mt-3 mb-5 w-75 '>
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Img variant='top' src={image_url} />
        <Card.Text>
          {' '}
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + '...'}{' '}
              <Link to={`/faq/${_id}`}>Details </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between'>
        <div>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaClock className='text-primary me-2'></FaClock>
          <span>{time}</span>
        </div>
        <div>
          <FaSignal className='text-warning me-2'></FaSignal>
          <span>{level}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseSummaryCart;
