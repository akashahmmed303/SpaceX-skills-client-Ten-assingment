import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/faqs-courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h4>All Courses List</h4>
      <div className='courses-list'>
        <ListGroup>
          <ListGroup.Item>
            {courses.map(cs => (
              <p key={cs.id}>
                <small>
                  <Link to={`/courses/${cs.id}`}>{cs.name}</Link>
                </small>
              </p>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default LeftSideNav;
